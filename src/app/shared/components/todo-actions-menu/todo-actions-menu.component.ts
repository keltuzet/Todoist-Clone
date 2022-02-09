import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MenuRef, MENU_DATA } from 'todoist-menu';

import { TodoPriority, Todo } from '@shared/models';
import { TodosQuery, TodosService, TodosStore } from '@stores/todos';
import { Router } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';

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
    @Inject(MENU_DATA) public data$: Observable<Todo>,
    private menuRef: MenuRef,
    private todosQuery: TodosQuery,
    private todosStore: TodosStore,
    private todosService: TodosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.$sub.add(this.data$.subscribe());
    this.router.navigate(['projects', 'id']);
  }

  ngOnDestroy(): void {
    this.$sub.unsubscribe();
  }

  updateTodoPriority(priority: TodoPriority): void {
    this.data$.pipe(
      take(1),
      switchMap(todo => this.todosService.updateTodo(todo.id, { ...todo, priorityId: priority.id }))
    )
      .subscribe();
    this.menuRef.close();
  }

  updateTodoSchedule(date: Date): void {
    this.data$.pipe(
      take(1),
      switchMap(todo => this.todosService.updateTodo(todo.id, { ...todo, endDate: date.toString() }))
    )
      .subscribe();
    this.menuRef.close();
  }

  removeTodo(): void {
    this.data$.pipe(
      take(1),
      switchMap(todo => this.todosService.delete(todo.id))
    )
      .subscribe();
    this.menuRef.close();
  }
}
