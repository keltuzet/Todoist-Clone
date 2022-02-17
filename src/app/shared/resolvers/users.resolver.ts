import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from '@stores/users';

@Injectable({
  providedIn: 'root',
})
export class UsersResolver implements Resolve<boolean> {
  constructor(usersService: UsersService) {
    usersService.syncCollection().subscribe();
  }

  resolve(): Observable<boolean> {
    return of(true);
  }
}
