import { Injectable } from '@angular/core';
import { arrayRemove, arrayUpdate, getIDType } from '@datorama/akita';
import { HttpUpdateConfig, NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
import { Observable, of } from 'rxjs';
import { map, mapTo, switchMap, tap } from 'rxjs/operators';

import { TodoPriority, todoToHttpBody, Todo, CreateTodo, Comment, CommentReaction } from '@shared/models';
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

  updateTodo(id: number, entity: Partial<Todo>, config?: HttpUpdateConfig<Todo>): Observable<Todo> {
    return super.update<Todo>(id, todoToHttpBody({ ...this.todosQuery.getEntity(id), ...entity }), {
      ...config,
    });
  }

  create(todo: CreateTodo): Observable<Todo[]> {
    return this.add(todo as Todo);
  }

  postComment(text: string, todoId: number): Observable<Todo> {
    const todo = this.todosQuery.getEntity(todoId);
    if (!todo) return of();
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
    if (!todo) return of();
    return this.update(todoId, {
      ...todo,
      comments: arrayRemove(todo.comments, commentId, 'id'),
    }).pipe(switchMap(() => of<void>()));
  }

  editComment(text: string, commentId: number, todoId: number): Observable<Comment> {
    const todo = this.todosQuery.getEntity(todoId);
    if (!todo) return of();
    const comments = arrayUpdate(todo.comments, commentId, {
      text,
      isEdited: true,
      lastEditedDate: new Date().toJSON(),
    });
    return this.update(todoId, {
      ...todo,
      comments,
    }).pipe(map((updatedTodo: Todo) => updatedTodo.comments.find(comment => comment.id === commentId)));
  }

  reactToComment(emoji: string, commentId: number, todoId: number): Observable<any> {
    const todo = this.todosQuery.getEntity(todoId);
    if (!todo) return;
    const comment = this.findCommentById(commentId, todo.comments);
    const hasAnyReactions = Boolean(comment.reacts);
    const authorId = 0;
    const reacts: CommentReaction = { ...comment.reacts };
    const hasReactedEmoji = Boolean(reacts[emoji]?.length);
    const hasAuthorAlreadyReacted = hasReactedEmoji
      ? Boolean(reacts[emoji].find(info => info.authorId === authorId))
      : false;
    if (!hasReactedEmoji) reacts[emoji] = [];
    if (hasAuthorAlreadyReacted) return of();
    reacts[emoji].push({
      authorId,
      reactedDate: new Date().toJSON(),
    });
    const comments = arrayUpdate(todo.comments, commentId, { reacts });
    return this.update(todoId, {
      ...todo,
      comments,
    }).pipe(map((updatedTodo: Todo) => this.findCommentById(commentId, updatedTodo.comments)));
  }

  unreactToComment(): void {}

  toggleReactToComment(emoji: string, commentId: number, todoId: number): Observable<any> {
    const todo = this.todosQuery.getEntity(todoId);
    if (!todo) return;
    const comment = this.findCommentById(commentId, todo.comments);
    const emojis = Object.keys(comment.reacts);
    const hasAnyReactions = Boolean(emojis.length);
    if (!hasAnyReactions) return this.reactToComment(emoji, commentId, todoId);
    const hasAuthorAlreadyReacted = Boolean(emojis.find(item => item === emoji));
    if (hasAuthorAlreadyReacted) {
    } else {
      return this.reactToComment(emoji, commentId, todoId);
    }
  }

  private findCommentById(commentId: number, comments: Comment[]): Comment {
    return comments.find(comment => comment.id === commentId);
  }

  private preGetTodo<T = Todo | Todo[]>(todoStream$: Observable<T>): Observable<T> {
    return this.todosQuery.getValue().isPrioritiesFetched
      ? todoStream$
      : this.getPriorities().pipe(switchMap(() => todoStream$));
  }
}
