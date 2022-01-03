import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 't-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  @Input() displayAddButton: boolean;
}
