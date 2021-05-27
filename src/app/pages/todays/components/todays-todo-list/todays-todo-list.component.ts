import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TodoView } from '@http/models';
import { AppDateRef } from '@shared/services';
import { TodosQuery } from '@stores/todos';

@Component({
  selector: 'app-todays-todo-list',
  templateUrl: './todays-todo-list.component.html',
  styleUrls: ['./todays-todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodaysTodoListComponent implements OnInit {
  @Input() todos: TodoView[];
  now = this.appDateRef.now;

  constructor(private todosQuery: TodosQuery, private appDateRef: AppDateRef) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<TodoView[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  todoTrackBy(index: number, item: TodoView): number {
    return item.id;
  }
}
