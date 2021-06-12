import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateUtils {
  constructor() {}

  setWeekend(date: Date, now = new Date(), weekends: number[] = [6, 7]) {
    weekends = Array.from(new Set(weekends))
      .filter((weekend) => weekend >= 1 && weekend <= 7)
      .sort();

    if (!weekends.length) return date;

    const curDay = now.getDay() || 7;
    let diff: number;

    if (curDay === weekends[weekends.length - 1]) {
      diff = 7 - curDay + weekends[0];
    } else {
      for (const weekend of weekends) {
        if (curDay < weekend) {
          diff = weekend - curDay;
          break;
        }
      }
    }

    date.setFullYear(now.getFullYear(), now.getMonth(), now.getDate() + diff);

    return date;
  }
}
