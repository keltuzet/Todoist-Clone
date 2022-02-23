import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioRecorderComponent } from './audio-recorder.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [AudioRecorderComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [AudioRecorderComponent],
})
export class AudioRecorderModule {}
