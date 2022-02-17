import { ComponentType, OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef } from '@angular/core';
import { SnackBarConfig } from './snackbar-config';

const ININITY_DURATION = 2147483647;

export class SnackBarRef<T = any> {
  durationTimeoutId;
  hasContent: boolean;

  constructor(
    private overlayRef: OverlayRef,
    public config: SnackBarConfig,
    public content?: TemplateRef<any> | ComponentType<T>,
  ) {
    this.hasContent = Boolean(content);
    this.scheduleSnackbarDismiss(config?.duration);
  }

  dismiss(): void {
    this.overlayRef.dispose();
  }

  dismissWithAction(): void {
    this.overlayRef.detach();
    this.overlayRef.dispose();
  }

  private scheduleSnackbarDismiss(duration = 5000): void {
    this.durationTimeoutId = setTimeout(() => this.dismiss(), duration);
  }
}
