import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { CreateTaskComponent } from './create-task.component';

@NgModule({
  declarations: [CreateTaskComponent],
  imports: [CommonModule, AngularSvgIconModule, TextareaAutosizeModule, ReactiveFormsModule, FormsModule],
  exports: [CreateTaskComponent],
})
export class CreateTaskModule {}
