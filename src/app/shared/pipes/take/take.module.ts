import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakePipe } from './take.pipe';

@NgModule({
  declarations: [TakePipe],
  imports: [CommonModule],
  exports: [TakePipe],
})
export class TakeModule {}
