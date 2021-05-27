import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodaysComponent } from './todays.component';

const routes: Routes = [{ path: '', component: TodaysComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodaysRoutingModule { }
