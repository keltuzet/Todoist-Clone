import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Todo, TodoPriority, TodoResponse } from '@http/models';

export interface TodosState extends EntityState<Todo, number> {
  priorities: TodoPriority[];
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super({
      priorities: [],
    });
    this.akitaPreAddEntity = this.akitaPreAddEntity.bind(this);
  }

  akitaPreAddEntity(todo: TodoResponse) {
    return this.parseTodoResponse(todo);
  }

  parseTodoResponse(todo: TodoResponse): Todo {
    this.propsToDate(todo, ['createdDate', 'endDate']);
    todo.comments.forEach((comment) => this.propsToDate(comment, 'postedDate'));
    return (todo as unknown) as Todo;
  }

  propsToDate<T extends object>(obj: T, key: Extract<keyof T, string> | Extract<keyof T, string>[]) {
    const keys: string[] = Array.isArray(key) ? key : [key];
    keys.forEach((k) => {
      obj[k] = new Date(obj[k]);
    });

    return obj;
  }
}
