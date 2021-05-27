import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, onlyFirst = true): unknown {
    return value[0] ? value[0].toLocaleUpperCase() + value.slice(1) : '';
  }
}
