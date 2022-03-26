import { AbstractControl, ValidationErrors } from '@angular/forms';
import { isValidHours, isValidMinutes } from '@shared/utils';

export function timeInputValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return { time: 'Time is missing' };

  const match = /(\b(?<hours>\d{1,2})(:(?<minutes>\d{1,2}))?(?<meridian>(am|pm))?\b)/gi.exec(control.value);

  if (match) {
    const { hours, minutes, meridian } = match.groups;
    const validHours = !hours || isValidHours(hours, Boolean(meridian));
    const validMinutes = !minutes || isValidMinutes(minutes);
    if (validHours && validMinutes) return null;
  }

  return { time: 'Incorrect format!' };
}
