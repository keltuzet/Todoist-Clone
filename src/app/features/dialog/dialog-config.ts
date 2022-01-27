import { ScrollStrategy } from '@angular/cdk/overlay';
import { InjectionToken, ViewContainerRef } from '@angular/core';

export interface DialogConfig<D> {
  data?: D;
  panelClass?: string | string[];
  hasBackdrop?: boolean;
  backdropClass?: string | string[];
  width?: string;
  height?: string;
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  viewContainerRef?: ViewContainerRef;
  scrollStrategy?: ScrollStrategy;
}

export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');
