import { Injectable } from '@angular/core';
import { arrayRemove, getIDType, transaction } from '@datorama/akita';
import { HttpUpdateConfig, NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
import { Observable, of } from 'rxjs';
import { mapTo, switchMap, tap } from 'rxjs/operators';

import { TodoPriority, todoToHttpBody, Todo, CreateTodo, Comment } from '@shared/models';
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

  getTodos(): Observable<Todo[]> {
    return this.preGetTodo<Todo[]>(this.get<Todo[]>());
  }

  getTodo(id: getIDType<TodosState>): Observable<Todo> {
    return this.preGetTodo(this.get(id));
  }

  preGetTodo<T = Todo | Todo[]>(todoStream$: Observable<T>): Observable<T> {
    return this.todosQuery.getValue().isPrioritiesFetched
      ? todoStream$
      : this.getPriorities().pipe(switchMap(() => todoStream$));
  }

  getPriorities(): Observable<TodoPriority[]> {
    return this.getHttp()
      .get<TodoPriority[]>(`${this.api}/priorities`)
      .pipe(
        tap(
          priorities =>
            this.store.update({
              priorities,
              isPrioritiesFetched: true,
            }),
          () => this.store.update({ isPrioritiesFetched: false }),
        ),
      );
  }

  updateTodo(id: number, entity: Todo, config?: HttpUpdateConfig<Todo>): Observable<Todo> {
    return super.update<Todo>(id, todoToHttpBody(entity), {
      ...config,
    });
  }

  create(todo: CreateTodo): Observable<Todo[]> {
    return this.add(todo as Todo);
  }

  postComment(text: string, todoId: number): Observable<Todo> {
    const todo = this.todosQuery.getEntity(todoId);
    if (!todo) return;
    return this.update(todoId, {
      ...todo,
      comments: [
        ...todo.comments,
        {
          text,
          authorId: 0,
          postedDate: new Date().toJSON(),
        } as Comment,
      ],
    }).pipe(switchMap((updatedTodo: Todo) => this.getTodos().pipe(mapTo(updatedTodo))));
  }

  removeComment(commentId: number, todoId: number): Observable<void> {
    const todo = this.todosQuery.getEntity(todoId);
    if (!todo) return;
    return this.update(todoId, {
      ...todo,
      comments: arrayRemove(todo.comments, commentId, 'id'),
    }).pipe(switchMap(() => of<void>()));
  }
}
