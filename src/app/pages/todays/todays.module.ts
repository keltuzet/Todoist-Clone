import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { TooltipModule } from '@features/tooltip';
import { MenuModule } from '@features/menu';
import { TodoModule } from '@shared/components';
import { CapitalizeModule } from '@shared/pipes';
import { TodaysRoutingModule } from './todays-routing.module';
import { TodaysComponent } from './todays.component';
import { TodaysTodoListComponent, OverdueTodoListComponent, SortMenuComponent } from './components';

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
