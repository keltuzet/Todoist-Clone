import { Injectable } from '@angular/core';
import { transaction } from '@datorama/akita';
import { HttpUpdateConfig, NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { parseTodoResp, Todo, TodoPriority, TodoResponse, todoToHttpBody, TodoView } from '@shared/models';
import { TodosState, TodosStore } from './todos.store';

@NgEntityServiceConfig({
  resourceName: 'todos',
})
@Injectable({
  providedIn: 'root',
})
export class TodosService extends NgEntityService<TodosState> {
  constructor(protected store: TodosStore) {
    super(store);
  }

  @transaction()
  getTodos() {
    return this.getPriorities().pipe(switchMap(() => this.get()));
  }

  getPriorities(): Observable<TodoPriority[]> {
    return this.getHttp()
      .get<TodoPriority[]>(`${this.api}/priorities`)
      .pipe(
        tap((priorities) => {
          this.store.update({
            priorities,
          });
        }),
      );
  }

  updateTodo(id: number, entity: TodoView, config?: HttpUpdateConfig<Todo>): Observable<Todo> {
    return super.update<Todo>(id, todoToHttpBody(entity), {
      ...config,
      mapResponseFn: parseTodoResp,
    });
  }
}
