import { Injectable } from '@angular/core';
import { HashMap, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { CommentsStore, CommentsState } from './comments.store';
import { Comment } from './comment.model';

@Injectable({ providedIn: 'root' })
export class CommentsQuery extends QueryEntity<CommentsState> {
  readonly hashMap$: Observable<HashMap<Comment>> = this.selectAll({ asObject: true });

  constructor(protected store: CommentsStore) {
    super(store);
  }
}
