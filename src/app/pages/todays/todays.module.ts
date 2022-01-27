import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { TooltipModule } from 'todoist-tooltip';
import { MenuModule } from 'todoist-menu';
import { OverdueTodoListModule, TodoModule } from '@shared/components';
import { CapitalizeModule } from '@shared/pipes';
import { TodaysRoutingModule } from './todays-routing.module';
import { TodaysComponent } from './todays.component';
import { TodaysTodoListComponent, SortMenuComponent } from './components';

@NgModule({
  declarations: [TodaysComponent, TodaysTodoListComponent, SortMenuComponent],
  imports: [
    CommonModule,
    TodaysRoutingModule,
    TodoModule,
    TooltipModule,
    AngularSvgIconModule,
    CapitalizeModule,
    DragDropModule,
    MenuModule,
    OverdueTodoListModule,
  ],
})
export class TodaysModule {}
