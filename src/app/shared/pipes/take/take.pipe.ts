import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'take',
})
export class TakePipe implements PipeTransform {
  transform<T>(value: T[], count: number = 0): T[] {
    return value.slice(0, count);
  }
}
