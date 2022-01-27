import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'px',
})
export class PixelCssUnitPipe implements PipeTransform {
  transform(value: number): string {
    return `${value}px`;
  }
}
