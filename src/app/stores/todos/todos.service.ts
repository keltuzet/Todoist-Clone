import { Injectable } from '@angular/core';
import { transaction } from '@datorama/akita';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
import { TodoPriority } from '@http/models';
import { of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
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

  getPriorities() {
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
}
