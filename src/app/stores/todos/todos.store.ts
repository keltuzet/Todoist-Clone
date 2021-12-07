import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { parseTodoResp, ExtractedTodo, TodoPriority, TodoResponse } from '@shared/models';

export interface TodosState extends EntityState<ExtractedTodo, number> {
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

  // akitaPreAddEntity(todo: TodoResponse): ExtractedTodo {
  //   console.log('call');
  //   return parseTodoResp(todo);
  // }

  propsToDate<T extends object>(obj: T, key: Extract<keyof T, string> | Extract<keyof T, string>[]): T {
    const keys: string[] = Array.isArray(key) ? key : [key];
    keys.forEach((k) => {
      obj[k] = new Date(obj[k]);
    });

    return obj;
  }
}
