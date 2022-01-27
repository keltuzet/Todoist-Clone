import { Injectable } from '@angular/core';
import { combineQueries, HashMap, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Author,
  Comment,
  DetailedComment,
  DetailedTodo,
  Project,
  Todo,
  TodoPriority,
  TodoStatus,
  TodoTag,
} from '@shared/models';
import { AppDateRef } from '@shared/services';
import { entityToObj, isToday } from '@shared/utils';
import { isOverdue } from '@shared/utils/is-overdue';
import { AuthorsQuery } from '@stores/authors/authors.query';
import { ProjectsQuery } from '@stores/projects/projects.query';
import { TagsQuery } from '@stores/tags/tags.query';
import { TodosStore, TodosState } from './todos.store';

@Injectable({ providedIn: 'root' })
export class TodosQuery extends QueryEntity<TodosState> {
  all$ = this.selectAll();
  todays$: Observable<DetailedTodo[]>;
  priorities$ = this.select('priorities');
  prioritiesHashMap$ = this.select('priorities').pipe(map(entityToObj));

  overdue$: Observable<DetailedTodo[]>;

  constructor(
    protected todosStore: TodosStore,
    private authorsQuery: AuthorsQuery,
    private projectsQuery: ProjectsQuery,
    private tagsQuery: TagsQuery,
    private appDateRef: AppDateRef,
  ) {
    super(todosStore);

    this.overdue$ = this.toTodo(
      this.selectAll({
        filterBy: (todo) => {
          const endDate = new Date(todo.endDate);
          return todo.hasEndTime
            ? endDate.getTime() < this.appDateRef.now.getTime()
            : endDate.getTime() < new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()).getTime();
        },
      }),
    );
  }

  selectOverdue(): Observable<Todo[]> {
    return this.toTodo(
      this.selectAll({
        filterBy: ({ endDate }) => isOverdue(new Date(endDate), this.appDateRef.now),
      }),
    );
  }

  selectTodays(currentDate = new Date()): Observable<Todo[]> {
    return this.toTodo(
      this.selectAll({
        filterBy: ({ endDate }) => {
          const res = isToday(new Date(endDate), currentDate);
          return res;
        },
      }),
    );
  }

  selectTodos(options): Observable<void> {
    return combineQueries([
      this.selectAll(options),
      this.authorsQuery.all$,
      this.projectsQuery.todoStatusesHashMap$,
    ]).pipe(map(([todos, authors, projects]) => {}));
  }

  selectPriorities(): Observable<TodoPriority[]> {
    return this.select('priorities');
  }

  toTodo(todos$: Observable<Todo[]>): Observable<DetailedTodo[]> {
    return combineQueries([
      todos$,
      this.authorsQuery.hashMap$,
      this.projectsQuery.hashMap$,
      this.prioritiesHashMap$,
      this.tagsQuery.hashMap$,
    ]).pipe(
      map(([todos, authorsHashMap, projectsHashMap, priorities, tagsHashMap]) => {
        return todos.map((todo) => {
          const project: Project = projectsHashMap[todo.projectId];

          return {
            ...todo,
            project,
            priority: priorities[todo.priorityId],
            status: this.getTodoStatus(todo, project),
            tags: this.getTodoTags(todo, tagsHashMap),
            comments: this.toDetailedComment(todo.comments, authorsHashMap),
          };
        });
      }),
    );
  }

  detailizeTodo(todo$: Observable<Todo>): Observable<DetailedTodo> {
    return combineQueries([
      todo$,
      this.authorsQuery.hashMap$,
      this.projectsQuery.hashMap$,
      this.prioritiesHashMap$,
      this.tagsQuery.hashMap$,
    ]).pipe(
      map(([todo, authorsHashMap, projectsHashMap, priorities, tagsHashMap]) => {
        const project: Project = projectsHashMap[todo.projectId];
        return {
          ...todo,
          project,
          priority: priorities[todo.priorityId],
          status: this.getTodoStatus(todo, project),
          tags: this.getTodoTags(todo, tagsHashMap),
          comments: this.toDetailedComment(todo.comments, authorsHashMap),
        };
      }),
    );
  }

  selectTodo(id: number): Observable<DetailedTodo> {
    return this.detailizeTodo(this.selectEntity(id));
  }

  private toDetailedComment(comments: Comment[], authorsHashMap: HashMap<Author>): DetailedComment[] {
    return comments.map((comment) => ({
      ...comment,
      author: authorsHashMap[comment.authorId],
    }));
  }

  private getTodoTags(todo: Todo, tagsHashMap: HashMap<TodoTag>): TodoTag[] {
    return todo.tagIds.filter((id) => tagsHashMap[id]).map((id) => tagsHashMap[id]);
  }

  private getTodoStatus(todo: Todo, project?: Project): TodoStatus {
    return project?.todoStatuses.find((statuses) => statuses.id === todo.statusId);
  }

  selectByTag(tag: TodoTag): Observable<Todo[]> {
    return this.toTodo(
      this.selectAll({
        filterBy: ({ tagIds }) => {
          return tagIds.includes(tag.id);
        },
      }),
    );
  }
}
