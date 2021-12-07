import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AuthorsService } from '@stores/authors';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthorsResolver implements Resolve<boolean> {
  constructor(private authorsService: AuthorsService) {}

  resolve(): Observable<boolean> {
    this.authorsService.get().subscribe();
    return of(true);
  }
}
