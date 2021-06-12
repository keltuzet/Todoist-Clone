import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { MENU_DATA } from '@features/menu/const';
import { TodoPriority, todoToHttpBody, TodoView } from '@shared/models';
import { TodosQuery, TodosService, TodosStore } from '@stores/todos';
import { MenuRef } from '@features/menu/models';

@Component({
  selector: 'app-todo-actions-menu',
  templateUrl: './todo-actions-menu.component.html',
  styleUrls: ['./todo-actions-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoActionsMenuComponent implements OnInit, OnDestroy {
  priorities$ = this.todosQuery.priorities$;
  now = new Date();
  day = this.now.getDate();
  $sub = new Subscription();

  constructor(
    @Inject(MENU_DATA) public data$: BehaviorSubject<TodoView>,
    private menuRef: MenuRef,
    private todosQuery: TodosQuery,
    private todosStore: TodosStore,
    private todosService: TodosService,
  ) {}

  ngOnInit() {
    this.$sub.add(this.data$.subscribe());
    console.log(this.menuRef);
  }

  ngOnDestroy() {
    this.$sub.unsubscribe();
  }

  updateTodoPriority(priority: TodoPriority) {
    this.todosService
      .updateTodo(this.data$.value.id, {
        ...this.data$.value,
        priorityId: priority.id,
      })
      .subscribe();
    this.menuRef.close();
  }

  updateTodoSchedule(date: Date) {
    this.todosService
      .updateTodo(this.data$.value.id, {
        ...this.data$.value,
        endDate: date,
      })
      .subscribe();
    this.menuRef.close();
  }

  removeTodo() {
    this.todosService.delete(this.data$.value.id).subscribe();
    this.menuRef.close();
  }
}
