export function setToday(date: Date, now = new Date()) {
  date.setFullYear(now.getFullYear(), now.getMonth(), now.getDate());
  return date;
}

export function setTomorrow(date: Date, now = new Date()) {
  date.setFullYear(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return date;
}

export function setWeekend(date: Date, now = new Date(), weekends: number[] = [6, 7]) {
  const curDay = now.getDay() || 7;
  let diff: number;
  if (curDay === weekends[weekends.length - 1]) {
    diff = 7 - curDay + weekends[0];
  } else {
    for (const weekend of weekends) {
      if (curDay < weekend) {
        diff = weekend - curDay;
      }
    }
  }

  date.setFullYear(now.getFullYear(), now.getMonth(), now.getDate() + diff);

  return date;
}

export function setNextWeek(date: Date, now = new Date()) {
  const curDay = now.getDay() || 7;
  date.setFullYear(now.getFullYear(), now.getMonth(), now.getDate() + (8 - curDay));

  return date;
}
