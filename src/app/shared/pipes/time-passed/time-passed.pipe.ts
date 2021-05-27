import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed',
})
export class TimePassedPipe implements PipeTransform {
  now = new Date();

  transform(value: Date): string | null {
    const passedDays = value.getDate() - this.now.getDate();
    return passedDays > 0 ? `${passedDays} день назад` : null;
  }
}
