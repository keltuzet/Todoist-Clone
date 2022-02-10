import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Todo } from '@shared/models';
import { Observable } from 'rxjs';
import { MENU_DATA } from 'todoist-menu';


@Component({
  selector: 't-todo-deadline',
  templateUrl: './todo-deadline.component.html',
  styleUrls: ['./todo-deadline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDeadlineComponent implements OnInit {

  constructor(
    @Inject(MENU_DATA) public data$: Observable<Todo>
  ) { }

  ngOnInit(): void {
  }

}
