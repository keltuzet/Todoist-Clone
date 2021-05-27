import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseHttp } from '@shared/models';
import { Todo, TodoResponse } from '@http/models';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodosHttpService extends BaseHttp {
  constructor(injector: Injector) {
    super(injector);
  }

  getTodays(): Observable<Todo[]> {
    console.log('object');
    return this.get<TodoResponse[]>(`todays`).pipe(
      tap((v) => console.log(v)),
      map((todos) => todos.map((todo) => ({ ...todo, createdDate: new Date(todo.createdDate), endDate: new Date(todo.endDate) }))),
    );
  }

  getAll(): Observable<Todo[]> {
    return this.get<TodoResponse[]>(`todos`).pipe(
      map((todos) => todos.map((todo) => ({ ...todo, createdDate: new Date(todo.createdDate), endDate: new Date(todo.endDate) }))),
    );
  }
}
