import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Todo } from '@shared/models';
import { AppDateRef } from '@shared/services';

@Component({
  selector: 'app-todays-todo-list',
  templateUrl: './todays-todo-list.component.html',
  styleUrls: ['./todays-todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodaysTodoListComponent implements OnInit {
  @Input() todos: Todo[];
  now = this.appDateRef.now;

  constructor(private appDateRef: AppDateRef) {}

  ngOnInit() {}

  drop(event: CdkDragDrop<Todo[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  todoTrackBy(index: number, item: Todo): number {
    return item.id;
  }

  termFormatFn = (todo: Todo) => 'HH:mm';
}
