import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  constructor(private ngDatePipe: DatePipe) {}

  transform(value: string): unknown {
    return null;
  }
}
