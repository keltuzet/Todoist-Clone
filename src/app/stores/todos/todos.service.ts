import { Injectable } from '@angular/core';
import { getIDType, transaction } from '@datorama/akita';
import { HttpUpdateConfig, NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { parseTodoResp, ExtractedTodo, TodoPriority, todoToHttpBody, Todo } from '@shared/models';
import { TodosState, TodosStore } from './todos.store';
import { TodosQuery } from './todos.query';

@NgEntityServiceConfig({
  resourceName: 'todos',
})
@Injectable({
  providedIn: 'root',
})
export class TodosService extends NgEntityService<TodosState> {
  constructor(protected store: TodosStore, private todosQuery: TodosQuery) {
    super(store);
  }

  getTodos(): Observable<ExtractedTodo[]> {
    return this.preGetTodo<ExtractedTodo[]>(
      this.get<ExtractedTodo[]>({ mapResponseFn: (todos) => todos.map(parseTodoResp) }),
    );
  }

  getTodo(id: getIDType<TodosState>): Observable<ExtractedTodo> {
    return this.preGetTodo(this.get(id, { mapResponseFn: parseTodoResp }));
  }

  preGetTodo<T = ExtractedTodo | ExtractedTodo[]>(todoStream$: Observable<T>): Observable<T> {
    return this.todosQuery.getValue().isPrioritiesFetched
      ? todoStream$
      : this.getPriorities().pipe(switchMap(() => todoStream$));
  }

  getPriorities(): Observable<TodoPriority[]> {
    return this.getHttp()
      .get<TodoPriority[]>(`${this.api}/priorities`)
      .pipe(
        tap(
          (priorities) =>
            this.store.update({
              priorities,
              isPrioritiesFetched: true,
            }),
          () => this.store.update({ isPrioritiesFetched: false }),
        ),
      );
  }

  updateTodo(id: number, entity: Todo, config?: HttpUpdateConfig<ExtractedTodo>): Observable<ExtractedTodo> {
    return super.update<ExtractedTodo>(id, todoToHttpBody(entity), {
      ...config,
      mapResponseFn: parseTodoResp,
    });
  }
}
