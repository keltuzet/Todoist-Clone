import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriorityFlagIconDirective } from './priority-flag-icon.directive';



@NgModule({
  declarations: [
    PriorityFlagIconDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PriorityFlagIconDirective
  ]
})
export class PriorityFlagIconModule { }
