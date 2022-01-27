import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MENU_DATA } from '@features/menu/const';
import { MenuRef } from '@features/menu/models';
import { SortTodosBy } from '@shared/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 't-sort-todos-by',
  templateUrl: './sort-todos.component.html',
  styleUrls: ['./sort-todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortTodosByComponent {
  menuItems: SortTodosBy[] = Object.values(SortTodosBy);

  constructor(@Inject(MENU_DATA) public selected$: BehaviorSubject<SortTodosBy>, private menuRef: MenuRef) {}

  select(item: SortTodosBy): void {
    this.menuRef.close(item);
  }
}
