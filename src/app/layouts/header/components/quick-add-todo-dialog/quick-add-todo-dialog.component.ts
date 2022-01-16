import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 't-quick-add-todo-dialog',
  templateUrl: './quick-add-todo-dialog.component.html',
  styleUrls: ['./quick-add-todo-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickAddTodoDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
