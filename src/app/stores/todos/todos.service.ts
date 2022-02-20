import { Injectable } from '@angular/core';
import { arrayRemove, arrayUpdate, getIDType } from '@datorama/akita';
import { from, Observable, of, throwError } from 'rxjs';
import { map, mapTo, switchMap, tap } from 'rxjs/operators';

import { TodosState, TodosStore } from './todos.store';
import { TodosQuery } from './todos.query';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { Comment, CommentsService } from '../comments';
import { MeQuery } from '@stores/me';
import { Timestamp } from 'firebase/firestore';
import { CreateTodo, Todo, TodoFromFirestore } from './todo.model';
import { PrioritiesQuery } from '@stores/priorities';
import { isNil } from '@shared/utils';

@Injectable({
  providedIn: 'root',
})
@CollectionConfig({ path: 'todos' })
export class TodosService extends CollectionService<TodosState> {
  constructor(
    protected store: TodosStore,
    private todosQuery: TodosQuery,
    private commentsService: CommentsService,
    private me: MeQuery,
    private prioritiesQuery: PrioritiesQuery,
  ) {
    super(store);
  }

  updateTodo(id: string, entity: Partial<Todo>): Observable<void> {
    return from(
      this.update({
        ...this.todosQuery.getEntity(id),
        ...entity,
      }),
    );
  }

  create(todo: CreateTodo): Observable<string> {
    return this.prioritiesQuery.selectDefault().pipe(
      switchMap(priority => {
        if (!todo.priorityId) todo.priorityId = priority.id;
        if (isNil(todo.tagIds)) todo.tagIds = [];
        if (isNil(todo.subTodoIds)) todo.subTodoIds = [];
        if (isNil(todo.commentsIds)) todo.commentsIds = [];
        return from(this.add(todo));
      }),
    );
  }

  updatePriority(todoId: string, priorityId: string): Observable<any> {
    return this.updateTodo(todoId, { priorityId });
  }

  postComment(text: string, todoId: string): Observable<any> {
    return this.me.myId$.pipe(
      switchMap(authorId => {
        const val = {
          text,
          todoId,
          authorId,
          postedDate: new Date().toJSON(),
          reacts: {},
        };
        return from(this.commentsService.add(val));
      }),
      switchMap((commentId: string) => {
        const todo = this.todosQuery.getEntity(todoId);
        return this.update({
          ...todo,
          commentsIds: [...todo.commentsIds, commentId],
        });
      }),
    );
  }

  removeComment(commentId: string, todoId: string): Observable<void> {
    const todo = this.todosQuery.getEntity(todoId);
    if (!todo) return throwError(this.generateNotFoundError);
    return from(
      this.update(todoId, {
        ...todo,
        commentsIds: arrayRemove(todo.commentsIds, commentId, 'id'),
      }),
    );
  }

  editComment(text: string, commentId: string, todoId: string): Observable<void> {
    const todo = this.todosQuery.getEntity(todoId);
    if (!todo) return this.throwNotFoundError();
    return this.commentsService.editComment(commentId, text);
  }

  formatFromFirestore(todo: TodoFromFirestore): Todo {
    return {
      ...todo,
      createdDate: todo.createdDate.toDate().toJSON(),
      endDate: todo.endDate.toDate().toJSON(),
    };
  }

  formatToFirestore(todo: Todo): TodoFromFirestore {
    return {
      ...this.cleanTodo(todo),
      createdDate: Timestamp.fromDate(new Date(todo.createdDate)),
      endDate: Timestamp.fromDate(new Date(todo.endDate)),
    };
  }

  private cleanTodo(todo: Todo): Todo {
    Object.keys(todo).forEach(key => {
      if (isNil(todo[key])) delete todo[key];
    });
    return todo;
  }

  private generateNotFoundError(): Error {
    return new Error('Todo not found!');
  }

  private throwNotFoundError(): Observable<never> {
    return throwError(this.generateNotFoundError);
  }
}
