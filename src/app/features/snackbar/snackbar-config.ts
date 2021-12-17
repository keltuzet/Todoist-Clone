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
  disuseDefaultTheme?: boolean;
}

export interface SnackBarDefaultConfig extends SnackBarConfig<SnackBarActionTextData | SnackBarActionIconData> {}

export interface SnackBarData {
  message: string;
}

export interface SnackBarActionTextData {
  message: string;
  icon: string;
  size?: string;
}

export interface SnackBarActionIconData {
  message: string;
  action: string;
}
