import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuRef, MENU_DATA } from 'todoist-menu';

import { TodoPriority } from '@shared/models';
import { TodosQuery } from '@stores/todos';

@Component({
  selector: 't-select-priority-menu',
  templateUrl: './select-priority-menu.component.html',
  styleUrls: ['./select-priority-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectPriorityMenuComponent {
  readonly priorities$ = this.todosQuery.priorities$;

  constructor(
    private todosQuery: TodosQuery,
    private menuRef: MenuRef,
    @Inject(MENU_DATA) public selectedPriorityId$: Observable<number>,
  ) {}

  select(priority: TodoPriority): void {
    this.menuRef.close(priority);
  }
}
