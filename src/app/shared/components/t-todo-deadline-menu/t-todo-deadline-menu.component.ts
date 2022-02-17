import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Todo } from '@stores/todos';
import { Observable } from 'rxjs';
import { MENU_DATA } from 'todoist-menu';

@Component({
  selector: 't-todo-deadline-menu',
  templateUrl: './t-todo-deadline-menu.component.html',
  styleUrls: ['./t-todo-deadline-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDeadlineMenuComponent implements OnInit {
  constructor(@Inject(MENU_DATA) public data$: Observable<Todo>) {}

  ngOnInit(): void {}
}
