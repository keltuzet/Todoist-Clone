import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day',
})
export class DayPipe implements PipeTransform {
  transform(value: 'tomorrow' | 'today' | 'yesterday'): unknown {
    switch (value) {
      case 'tomorrow':
        return;
      case 'today':
        return;
      case 'yesterday':
        return;
      default:
        return;
    }
  }
}
