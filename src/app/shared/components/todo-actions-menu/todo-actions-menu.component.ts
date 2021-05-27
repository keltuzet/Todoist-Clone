import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MENU_DATA } from '@features/menu/const';
import { TodoPriority, TodoView } from '@http/models';
import { TodosQuery } from '@stores/todos';
import { now } from 'moment';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-todo-actions-menu',
  templateUrl: './todo-actions-menu.component.html',
  styleUrls: ['./todo-actions-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoActionsMenuComponent implements OnInit {
  priorities$ = this.todosQuery.priorities$;
  now = new Date();
  day = this.now.getDate();

  constructor(@Inject(MENU_DATA) public data$: BehaviorSubject<TodoView>, private todosQuery: TodosQuery) {}

  ngOnInit(): void {
    this.data$.subscribe((v) => console.log(v));
  }
}
