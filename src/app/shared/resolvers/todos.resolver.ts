import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TodosService } from '@stores/todos';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosResolver implements Resolve<boolean> {
  constructor(todosService: TodosService) {
    todosService.syncCollection().subscribe();
  }

  resolve(): Observable<boolean> {
    return of(true);
  }
}
