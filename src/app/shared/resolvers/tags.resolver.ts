import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TagsService } from '@stores/tags';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TagsResolver implements Resolve<boolean> {
  constructor(tagsService: TagsService) {
    tagsService.syncCollection().subscribe();
  }

  resolve(): Observable<boolean> {
    return of(true);
  }
}
