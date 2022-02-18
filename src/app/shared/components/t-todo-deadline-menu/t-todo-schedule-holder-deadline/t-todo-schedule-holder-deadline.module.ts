import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TTodoScheduleHolderDeadlineComponent } from './t-todo-schedule-holder-deadline.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [TTodoScheduleHolderDeadlineComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [TTodoScheduleHolderDeadlineComponent]
})
export class TTodoScheduleHolderDeadlineModule {}
