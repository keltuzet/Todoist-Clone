import * as moment from 'moment';

type dateFn = (date: moment.Moment, now?: moment.Moment) => moment.Moment;
type comparisonFn = (date: moment.Moment, now?: moment.Moment) => boolean;
type setWeekendFn = (date: moment.Moment, now?: moment.Moment, weekends?: number[]) => moment.Moment;

export const setCurrentMonth: dateFn = (date, now = moment()) => {
  return date.year(now.year()).month(now.month());
};

export const setToday: dateFn = (date, now = moment()) => {
  return setCurrentMonth(date, now).date(now.date());
};

export const setTomorrow: dateFn = (date, now = moment()) => {
  return setCurrentMonth(date).date(now.date() + 1);
};

export const setWeekend: setWeekendFn = (date, now = moment(), weekends = [6, 7]) => {
  weekends = Array.from(new Set(weekends))
    .filter((weekend) => weekend >= 1 && weekend <= 7)
    .sort();

  if (!weekends.length) return date;

  const curDay = now.day() || 7;
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

  return setCurrentMonth(date).date(now.date() + diff);
};

export const setNextWeek: dateFn = (date, now = moment()) => {
  const curDay = now.day() || 7;
  setCurrentMonth(date).date(now.date() + (8 - curDay));

  return date;
};

export const isSameDate = (dateA: moment.Moment, dateB: moment.Moment): boolean => {
  return dateA.startOf('day').isSame(dateB.startOf('day'));
};

export const isBeforeToday: comparisonFn = (date, now = moment()) => {
  return date.startOf('day').isBefore(now.startOf('day'));
};
