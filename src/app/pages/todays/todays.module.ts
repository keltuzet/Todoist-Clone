import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TodaysRoutingModule } from './todays-routing.module';
import { TodaysComponent } from './todays.component';
import { TodoModule } from '@shared/components';
import { TooltipModule } from '@features/tooltip';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CapitalizeModule } from '@shared/pipes';
import { TodaysTodoListComponent } from './components/todays-todo-list/todays-todo-list.component';
import { OverdueTodoListComponent } from './components/overdue-todo-list/overdue-todo-list.component';
import { SortMenuComponent } from './components/sort-menu/sort-menu.component';
import { MenuModule } from '@features/menu';

@NgModule({
  declarations: [TodaysComponent, TodaysTodoListComponent, OverdueTodoListComponent, SortMenuComponent],
  imports: [
    CommonModule,
    TodaysRoutingModule,
    TodoModule,
    TooltipModule,
    AngularSvgIconModule,
    CapitalizeModule,
    DragDropModule,
    MenuModule,
  ],
})
export class TodaysModule {}
