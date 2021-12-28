import { InjectionToken } from '@angular/core';

export interface DialogConfig<D> {
  data: D;
}

export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');
