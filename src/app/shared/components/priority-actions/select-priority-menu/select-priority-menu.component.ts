import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MenuRef, MENU_DATA } from 'todoist-menu';
import { PrioritiesQuery, Priority } from '@stores/priorities';

@Component({
  selector: 't-select-priority-menu',
  templateUrl: './select-priority-menu.component.html',
  styleUrls: ['./select-priority-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectPriorityMenuComponent {
  readonly priorities$ = this.prioritiesQuery.selectAll();

  constructor(
    private prioritiesQuery: PrioritiesQuery,
    private menuRef: MenuRef,
    @Inject(MENU_DATA) public selectedPriorityId: number,
  ) {}

  select(priority: Priority): void {
    this.menuRef.close(priority);
  }
}
