import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TodoView } from '@http/models';
import { TodoActionsMenuComponent } from '../todo-actions-menu';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit, AfterViewInit {
  @Input() todo: TodoView;
  @Input() todoCount: number;
  now = new Date();

  menu = TodoActionsMenuComponent;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
