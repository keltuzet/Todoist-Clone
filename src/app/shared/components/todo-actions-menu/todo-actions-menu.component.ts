import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MenuRef, MENU_DATA } from 'todoist-menu';

import { TodoPriority, Todo } from '@shared/models';
import { TodosQuery, TodosService, TodosStore } from '@stores/todos';
import { Router } from '@angular/router';

@Component({
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
    @Inject(MENU_DATA) public data$: BehaviorSubject<Todo>,
    private menuRef: MenuRef,
    private todosQuery: TodosQuery,
    private todosStore: TodosStore,
    private todosService: TodosService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.$sub.add(this.data$.subscribe());
    this.router.navigate(['projects', 'id']);
  }

  ngOnDestroy(): void {
    this.$sub.unsubscribe();
  }

  updateTodoPriority(priority: TodoPriority): void {
    this.todosService
      .updateTodo(this.data$.value.id, {
        ...this.data$.value,
        priorityId: priority.id,
      })
      .subscribe();
    this.menuRef.close();
  }

  updateTodoSchedule(date: Date): void {
    this.todosService
      .updateTodo(this.data$.value.id, {
        ...this.data$.value,
        endDate: date.toString(),
      })
      .subscribe();
    this.menuRef.close();
  }

  removeTodo(): void {
    this.todosService.delete(this.data$.value.id).subscribe();
    this.menuRef.close();
  }
}
