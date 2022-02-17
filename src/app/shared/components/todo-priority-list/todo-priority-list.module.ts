import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { TooltipModule } from 'todoist-tooltip';
import { PriorityListComponent } from './todo-priority-list.component';
import { PriorityFlagIconModule } from '@shared/directives';

@NgModule({
  declarations: [PriorityListComponent],
  imports: [CommonModule, AngularSvgIconModule, TooltipModule, PriorityFlagIconModule],
  exports: [PriorityListComponent],
})
export class PriorityListModule {}

const arr: [number, number, number] = [1, 2, 4];
const c = [1, ...arr, 2]; // c = [1, 1, 3, 4, 2]

myFn(...arr); // arr[0], arr[1] ...

function myFn(arr1, arr2, arr3): void {}

const obj = { a: 'a' };
const obj2 = { ...obj }; // { a: 'a' }

let [a, ...b] = [1, 2, 3, 4];

let { x, y } = { x: 'xuy', y: 'yux' };
