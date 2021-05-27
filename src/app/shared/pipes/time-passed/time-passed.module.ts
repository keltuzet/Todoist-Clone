import { NgModule } from '@angular/core';
import { TimePassedPipe } from './time-passed.pipe';

@NgModule({
  declarations: [TimePassedPipe],
  exports: [TimePassedPipe],
})
export class TimePassedModule {}
