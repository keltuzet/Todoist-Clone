import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioRecorderDialogComponent } from './audio-recorder-dialog.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonModule } from '@features/button';

@NgModule({
  declarations: [AudioRecorderDialogComponent],
  imports: [CommonModule, AngularSvgIconModule, ButtonModule],
  exports: [AudioRecorderDialogComponent],
})
export class AudioRecorderDialogModule {}
