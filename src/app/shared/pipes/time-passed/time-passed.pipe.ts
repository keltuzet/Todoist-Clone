import { Pipe, PipeTransform } from '@angular/core';

import { calcDaysDiff } from '@shared/utils';

@Pipe({
  name: 'timePassed',
})
export class TimePassedPipe implements PipeTransform {
  transform(value: Date): string | null {
    const passedDays = Math.floor(calcDaysDiff(value));
    return passedDays < 1 ? null : `${passedDays} день назад`;
  }
}
