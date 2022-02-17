import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Todo } from '@stores/todos';
import { AppDateRef } from '@shared/services';
import { TodosQuery } from '@stores/todos';
import { Subscription } from 'rxjs';

@Component({
  selector: 't-overdue-todo-list',
  templateUrl: './overdue-todo-list.component.html',
  styleUrls: ['./overdue-todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverdueTodoListComponent implements OnInit, OnDestroy {
  overdue$ = this.todosQuery.selectOverdue();
  todos: Todo[];
  now = this.appDateRef.now;
  sub$: Subscription;

  constructor(private todosQuery: TodosQuery, private appDateRef: AppDateRef, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.sub$ = this.overdue$.subscribe(todos => {
      this.todos = todos;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  drop(event: CdkDragDrop<Todo[]>): void {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  todoTrackBy(index: number, item: Todo): string {
    return item.id;
  }

  termFormatFn = (todo: Todo) => `d MMMM${todo.hasEndTime ? ' HH:mm' : ''}`;
}
