import { Injectable } from '@angular/core';
import { combineQueries, HashMap, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DetailedTodo, Todo } from './todo.model';
import { Tag } from '../tags/tag.model';
import { Project, Status } from '../projects/project.model';
import { Priority } from '../priorities/priority.model';
import { Comment, DetailedComment } from '../comments';
import { AppDateRef } from '@shared/services';
import { isToday, isOverdue } from '@shared/utils';
import { ProjectsQuery } from '@stores/projects/projects.query';
import { TagsQuery } from '@stores/tags/tags.query';
import { TodosStore, TodosState } from './todos.store';
import { PrioritiesQuery } from '@stores/priorities';
import { CommentsQuery } from '@stores/comments';
import { User, UsersQuery } from '@stores/users';
import * as moment from 'moment';

@Injectable({ providedIn: 'root' })
export class TodosQuery extends QueryEntity<TodosState> {
  readonly all$: Observable<Todo[]> = this.selectAll();
  readonly priorities$: Observable<Priority[]> = this.select('priorities');
  // readonly priorityHashMap$: Observable<HashMap<Priority>> = this.select('priorities').pipe(map(entityToObj));

  constructor(
    protected todosStore: TodosStore,
    private projectsQuery: ProjectsQuery,
    private tagsQuery: TagsQuery,
    private prioritiesQuery: PrioritiesQuery,
    private commentsQuery: CommentsQuery,
    private usersQuery: UsersQuery,
    private appDateRef: AppDateRef,
  ) {
    super(todosStore);
  }

  selectOverdue(): Observable<Todo[]> {
    return this.toTodo(
      this.selectAll({
        filterBy: ({ endDate }) => isOverdue(new Date(endDate), this.appDateRef.now),
      }),
    );
  }

  selectTodays(): Observable<Todo[]> {
    return this.toTodo(
      this.selectAll({
        filterBy: ({ endDate }) => {
          return moment().isSame(endDate, 'day');
        },
      }),
    );
  }

  selectByDate(date: moment.Moment | Date): Observable<DetailedTodo[]> {
    return this.toTodo(
      this.selectAll({
        filterBy: ({ endDate }) => {
          const momentDate: moment.Moment = moment.isMoment(date) ? date : moment(date);
          return momentDate.isSame(endDate, 'day');
        },
      }),
    );
  }

  selectTodo(id: number): Observable<DetailedTodo> {
    return this.detailizeTodo(this.selectEntity(id));
  }

  selectByTag(tag: Tag): Observable<Todo[]> {
    return this.toTodo(
      this.selectAll({
        filterBy: ({ tagIds }) => {
          return tagIds.includes(tag.id);
        },
      }),
    );
  }

  selectByStatusID(statusId: string): Observable<DetailedTodo[]> {
    return this.toTodo(this.selectAll({ filterBy: todo => todo.statusId === statusId }));
  }

  getByStatusID(statusId: string): Todo[] {
    return this.getAll({ filterBy: todo => todo.statusId === statusId });
  }

  private toTodo(todos$: Observable<Todo[]>): Observable<DetailedTodo[]> {
    return combineQueries([
      todos$,
      this.projectsQuery.hashMap$,
      this.prioritiesQuery.hashMap$,
      this.tagsQuery.hashMap$,
      this.commentsQuery.hashMap$,
      this.usersQuery.hashMap$,
    ]).pipe(
      map(([todos, projectsHashMap, priorities, tagsHashMap, commentsHashMap, usersHashMap]) => {
        return todos.map(todo => {
          const project: Project = projectsHashMap[todo.projectId];

          return {
            ...todo,
            project,
            priority: priorities[todo.priorityId],
            status: this.getStatus(todo, project),
            tags: this.getTags(todo, tagsHashMap),
            comments: this.getComments(todo, commentsHashMap, usersHashMap) as any,
          };
        });
      }),
    );
  }

  private detailizeTodo(todo$: Observable<Todo>): Observable<DetailedTodo> {
    return combineQueries([
      todo$,
      this.projectsQuery.hashMap$,
      this.prioritiesQuery.hashMap$,
      this.tagsQuery.hashMap$,
      this.commentsQuery.hashMap$,
      this.usersQuery.hashMap$,
    ]).pipe(
      map(([todo, projectsHashMap, priorities, tagsHashMap, commentsHashMap, usersHashMap]) => {
        const project: Project = projectsHashMap[todo.projectId];
        return {
          ...todo,
          project,
          priority: priorities[todo.priorityId],
          status: this.getStatus(todo, project),
          tags: this.getTags(todo, tagsHashMap),
          comments: this.getComments(todo, commentsHashMap, usersHashMap) as any,
        };
      }),
    );
  }

  private toDetailedComment(comments: Comment[], usersHashMap: HashMap<User>): DetailedComment[] {
    return comments.map(comment => ({
      ...comment,
      author: usersHashMap[comment.authorId],
    }));
  }

  private getTags(todo: Todo, tagsHashMap: HashMap<Tag>): Tag[] {
    return todo.tagIds.filter(id => tagsHashMap[id]).map(id => tagsHashMap[id]);
  }

  private getStatus(todo: Todo, project?: Project): Status {
    return project?.statuses.find(statuses => statuses.id === todo.statusId);
  }

  private getComments(todo: Todo, commentsHashMap: HashMap<Comment>, usersHashMap: HashMap<User>): Comment[] {
    const comments = todo.commentsIds.filter(id => commentsHashMap[id]).map(id => commentsHashMap[id]);
    return this.toDetailedComment(comments, usersHashMap);
  }
}
