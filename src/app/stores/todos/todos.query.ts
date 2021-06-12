import { Injectable } from '@angular/core';
import { combineQueries, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo, TodoView } from '@shared/models';
import { AppDateRef } from '@shared/services';
import { entityToObj, isToday } from '@shared/utils';
import { isOverdue } from '@shared/utils/is-overdue';
import { AuthorsQuery } from '@stores/authors/authors.query';
import { ProjectsQuery } from '@stores/projects/projects.query';
import { TagsQuery } from '@stores/tags/tags.query';
import { TodosStore, TodosState } from './todos.store';

@Injectable({ providedIn: 'root' })
export class TodosQuery extends QueryEntity<TodosState> {
  todays$: Observable<Todo[]>;
  priorities$ = this.select('priorities');
  prioritiesAsObj$ = this.select('priorities').pipe(map(entityToObj));

  overdue$: Observable<Todo[]>;

  constructor(
    protected todosStore: TodosStore,
    private authorsQuery: AuthorsQuery,
    private projectsQuery: ProjectsQuery,
    private tagsQuery: TagsQuery,
    private appDateRef: AppDateRef,
  ) {
    super(todosStore);

    this.overdue$ = this.toTodoView(
      this.selectAll({
        filterBy: ({ endDate, hasEndTime }) => {
          return hasEndTime
            ? endDate.getTime() < this.appDateRef.now.getTime()
            : endDate.getTime() < new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()).getTime();
        },
      }),
    );
  }

  selectOverdue() {
    return this.toTodoView(
      this.selectAll({
        filterBy: ({ endDate }) => isOverdue(endDate, this.appDateRef.now),
      }),
    );
  }

  selectTodays(currentDate = new Date()) {
    return this.toTodoView(
      this.selectAll({
        filterBy: ({ endDate }) => {
          let res = isToday(endDate, currentDate);
          return res;
        },
      }),
    );
  }

  selectTodos(options) {
    return combineQueries([
      this.selectAll(options),
      this.authorsQuery.all$,
      this.projectsQuery.allTodoStatusesAsObj$,
    ]).pipe(map(([todos, authors, projects]) => {}));
  }

  selectPriorities() {
    return this.select('priorities');
  }

  toTodoView(todos$: Observable<Todo[]>): Observable<TodoView[]> {
    return combineQueries([
      todos$,
      this.authorsQuery.all$,
      this.projectsQuery.hashMap$,
      this.prioritiesAsObj$,
      this.tagsQuery.hashMap$,
    ]).pipe(
      map(([todos, authors, projectMap, priorities, tagHashMap]) => {
        return todos.map((todo) => {
          const project = projectMap[todo.projectId];
          // console.log(tagHashMap);
          // console.log(todo.tagIds.filter((id) => tagHashMap[id]).map((id) => tagHashMap[id]));
          return {
            ...todo,
            project,
            priority: priorities[todo.priorityId],
            status: project?.todoStatuses.find((item) => item.id === todo.priorityId),
            tags: todo.tagIds.filter((id) => tagHashMap[id]).map((id) => tagHashMap[id]),
            comments: todo.comments.map((comment) => ({
              ...comment,
              author: authors[comment.authorId],
            })),
          };
        });
      }),
    );
  }
}
