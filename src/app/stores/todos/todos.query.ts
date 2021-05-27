import { Injectable, OnInit } from '@angular/core';
import { combineQueries, QueryEntity } from '@datorama/akita';
import { Todo, TodoView } from '@http/models';
import { AppDateRef } from '@shared/services';

import { entityToObj, isToday } from '@shared/utils';
import { AuthorsQuery } from '@stores/authors/authors.query';
import { AuthorsStore } from '@stores/authors/authors.store';
import { ProjectsQuery } from '@stores/projects/projects.query';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
    private appDateRef: AppDateRef,
  ) {
    super(todosStore);

    this.overdue$ = this.toTodoView(
      this.selectAll({
        filterBy: ({ endDate, hasEndTime }) => {
          // console.log(endDate.getTime() < this.appDateRef.now.getTime());
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
        filterBy: ({ endDate }) => endDate.getTime() < this.appDateRef.now.getTime(),
      }),
    );
  }

  selectTodays(currentDate = new Date()) {
    return this.toTodoView(
      this.selectAll({
        filterBy: ({ endDate }) => isToday(endDate, currentDate),
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
      this.projectsQuery.selectProjectsAsQuery(),
      this.prioritiesAsObj$,
    ]).pipe(
      map(([todos, authors, projects, priorities]) => {
        return todos.map((todo) => {
          return {
            ...todo,
            comments: todo.comments.map((comment) => ({
              ...comment,
              author: authors[comment.authorId],
            })),
            statuses: todo.tags.map(({ projectId, statusId }) => projects[projectId].todoStatuses[statusId]),
            priority: priorities[todo.priorityId],
          };
        });
      }),
    );
  }
}
