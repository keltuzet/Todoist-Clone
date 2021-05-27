import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { MENU_DATA } from '@features/menu/const';
import { TodoView } from '@http/models';
import { TodosQuery } from '@stores/todos';

@Component({
  selector: 'app-todo-actions-menu',
  templateUrl: './todo-actions-menu.component.html',
  styleUrls: ['./todo-actions-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoActionsMenuComponent implements OnInit, OnDestroy {
  priorities$ = this.todosQuery.priorities$;
  now = new Date();
  day = this.now.getDate();
  $sub = new Subscription();

  constructor(@Inject(MENU_DATA) public data$: BehaviorSubject<TodoView>, private todosQuery: TodosQuery) {}

  ngOnInit() {
    this.$sub.add(this.data$.subscribe());
  }

  ngOnDestroy() {
    this.$sub.unsubscribe();
  }
}
