import { Pipe, PipeTransform } from '@angular/core';
import { isDate } from 'moment';

@Pipe({
  name: 'timePassed',
})
export class TimePassedPipe implements PipeTransform {
  now = new Date();

  transform(value: string | Date): string | null {
    const date = isDate(value) ? value : new Date(value);
    const passedDays = date.getDate() - this.now.getDate();
    return passedDays > 0 ? `${passedDays} день назад` : null;
  }
}
