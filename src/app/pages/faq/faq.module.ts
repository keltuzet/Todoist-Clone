import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FaqComponent],
  imports: [CommonModule, FaqRoutingModule, ReactiveFormsModule],
})
export class FaqModule {}
