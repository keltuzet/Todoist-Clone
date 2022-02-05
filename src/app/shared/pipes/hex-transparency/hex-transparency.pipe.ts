import { Pipe, PipeTransform } from '@angular/core';
import { toTransparencyHexColor } from '@shared/utils';

@Pipe({
  name: 'hexTransparency',
})
export class HexTransparencyPipe implements PipeTransform {
  transform(color: string, opacity: number): string {
    return toTransparencyHexColor(color, opacity);
  }
}
