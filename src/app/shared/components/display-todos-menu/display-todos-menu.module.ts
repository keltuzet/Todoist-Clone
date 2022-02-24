import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { DisplayTodosMenuComponent } from './menus/display-todos/display-todos-menu.component';
import { GroupTodosByComponent } from './menus/group-todos-by/group-todos-by.component';
import { SortTodosByComponent } from './menus/sort-todos/sort-todos.component';
import { MenuModule } from 'todoist-menu';

@NgModule({
  declarations: [DisplayTodosMenuComponent, GroupTodosByComponent, SortTodosByComponent],
  imports: [CommonModule, AngularSvgIconModule, MenuModule],
  exports: [DisplayTodosMenuComponent],
})
export class DisplayTodosMenuModule {}
