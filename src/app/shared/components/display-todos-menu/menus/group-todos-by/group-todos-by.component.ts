import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MENU_DATA } from '@features/menu/const';
import { MenuRef } from '@features/menu/models';
import { BehaviorSubject } from 'rxjs';
import { GroupTodosBy } from '../../group-todos-by.enum';

@Component({
  selector: 't-group-todos-by',
  templateUrl: './group-todos-by.component.html',
  styleUrls: ['./group-todos-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupTodosByComponent {
  menuItems: GroupTodosBy[] = Object.values(GroupTodosBy);

  constructor(@Inject(MENU_DATA) public selected$: BehaviorSubject<GroupTodosBy>, private menuRef: MenuRef) {}

  select(item: GroupTodosBy): void {
    this.menuRef.close(item);
  }
}
