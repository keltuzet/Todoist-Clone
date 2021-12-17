import { ComponentType, OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef } from '@angular/core';
import { SnackBarConfig } from './snackbar-config';

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

  private scheduleSnackbarDismiss(duration = Number.MAX_VALUE): void {
    this.durationTimeoutId = setTimeout(() => this.dismiss(), duration);
  }
}
