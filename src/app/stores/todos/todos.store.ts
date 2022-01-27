import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Todo, TodoPriority } from '@shared/models';

export interface TodosState extends EntityState<Todo, number> {
  priorities: TodoPriority[];
  isPrioritiesFetched: boolean;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super({
      priorities: [],
      isPrioritiesFetched: false,
    });
    this.akitaPreAddEntity = this.akitaPreAddEntity.bind(this);
  }
}
