import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CommentsService } from '@stores/comments';

@Injectable({ providedIn: 'root' })
export class CommentsResolver implements Resolve<boolean> {
  constructor(commentsService: CommentsService) {
    commentsService.syncCollection().subscribe();
  }

  resolve(): Observable<boolean> {
    return of(true);
  }
}
