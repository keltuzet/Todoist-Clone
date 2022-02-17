import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Todo } from '@stores/todos';
import { AppDateRef } from '@shared/services';

@Component({
  selector: 't-todays-todo-list',
  templateUrl: './todays-todo-list.component.html',
  styleUrls: ['./todays-todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodaysTodoListComponent {
  @Input() todos: Todo[];
  now = this.appDateRef.now;

  constructor(private appDateRef: AppDateRef) {}

  drop(event: CdkDragDrop<Todo[]>): void {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  todoTrackBy(index: number, item: Todo): string {
    return item.id;
  }

  termFormatFn = (todo: Todo) => 'HH:mm';
}
