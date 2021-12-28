import { InjectionToken, ViewContainerRef } from '@angular/core';

export const SNACK_BAR_DATA = new InjectionToken<any>('SNACK_BAR_DATA');

export type SnackBarHorizontalPosition = 'start' | 'center' | 'end';
export type SnackBarVerticalPosition = 'top' | 'bottom';

export interface SnackBarConfig<D = any> {
  announcementMessage?: string;
  data?: D;
  panelClass?: string | string[];
  duration?: number;
  horizontalPosition?: SnackBarHorizontalPosition;
  verticalPosition?: SnackBarVerticalPosition;
  viewContainerRef?: ViewContainerRef;
  disuseContainerTheme?: boolean;
  disuseContainerAnimation?: boolean;
}

export interface SnackBarDefaultConfig extends SnackBarConfig<SnackBarData | SnackBarActionTextData | SnackBarActionIconData> {}

export interface SnackBarData {
  message: string;
}

export interface SnackBarActionTextData extends SnackBarData {
  icon: string;
  size?: string;
}

export interface SnackBarActionIconData extends SnackBarData {
  action: string;
}
