import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GroupTodosByComponent } from '../../../../shared/components/display-todos-menu/menus/group-todos-by/group-todos-by.component';

@Component({
  selector: 't-display-todos-menu',
  templateUrl: './display-todos-menu.component.html',
  styleUrls: ['./display-todos-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayTodosMenuComponent implements OnInit {

  menuGroupBy = GroupTodosByComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
