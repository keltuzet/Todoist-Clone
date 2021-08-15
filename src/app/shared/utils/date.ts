import { ONE_DAY } from '@shared/const';

export function setToday(date: Date, now = new Date()): Date {
  date.setFullYear(now.getFullYear(), now.getMonth(), now.getDate());
  return date;
}

export function setTomorrow(date: Date, now = new Date()): Date {
  date.setFullYear(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return date;
}

export function setWeekend(date: Date, now = new Date(), weekends: number[] = [6, 7]): Date {
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

export function setNextWeek(date: Date, now = new Date()): Date {
  const curDay = now.getDay() || 7;
  date.setFullYear(now.getFullYear(), now.getMonth(), now.getDate() + (8 - curDay));

  return date;
}

export function calcDaysDiff(a: Date, b = new Date()): number {
  return (b.getTime() - a.getTime()) / ONE_DAY;
}
