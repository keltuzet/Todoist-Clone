import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DetailedTodo, Todo } from '@stores/todos';

@Component({
  selector: 't-todo-board-card',
  templateUrl: './todo-board-card.component.html',
  styleUrls: ['./todo-board-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoBoardCardComponent implements OnInit {
  @Input() todo: DetailedTodo;
  showTerm = true;
  termFormat = '';

  constructor() {}

  ngOnInit(): void {}
}
