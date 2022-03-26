import { isNil } from './is-nil';

export function isValidHours(hours: number | string, hasMeridian = false): boolean {
  if (isNil(hours)) return false;
  const maxHours = hasMeridian ? 12 : 24;
  const hoursNum: number = typeof hours === 'string' ? +hours : hours;
  return 0 <= hoursNum && hoursNum <= maxHours;
}

export function isValidMinutes(minutes: number | string): boolean {
  if (isNil(minutes)) return false;
  const minutesNum: number = typeof minutes === 'string' ? +minutes : minutes;
  return 0 <= minutesNum && minutesNum <= 59;
}

export function isValidTimeMeridian(meridian: string): boolean {
  return /\b(am|pm)\b/i.test(meridian);
}
