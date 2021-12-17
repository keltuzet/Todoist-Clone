import { OverlayRef, Overlay, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Injector, TemplateRef } from '@angular/core';
import { SnackbarContainerComponent } from '../components';

import { SnackBarConfig, SnackBarDefaultConfig, SNACK_BAR_DATA } from '../snackbar-config';
import { SnackBarRef } from '../snackbar-ref';

@Injectable()
export class SnackbarService {
  private overlayRef: OverlayRef;

  constructor(private injector: Injector, private overlay: Overlay, @Inject(DOCUMENT) private document: Document) {}

  open(config?: SnackBarDefaultConfig): SnackBarRef<any> {
    this.overlayRef = this.createOverlay(config);
    const snackBarRef = new SnackBarRef(this.overlayRef, config);
    const snackBarInjector = this.createInjector(snackBarRef, config?.data);
    const snackBarComponent = new ComponentPortal<SnackbarContainerComponent>(
      SnackbarContainerComponent,
      config?.viewContainerRef,
      snackBarInjector,
    );
    this.overlayRef.attach(snackBarComponent);

    return snackBarRef;
  }

  openFromComponent<T, D>(component: ComponentType<T>, config?: SnackBarConfig<D>): SnackBarRef<T> {
    this.overlayRef = this.createOverlay(config);
    const snackBarRef = new SnackBarRef<T>(this.overlayRef, config, component);
    const snackBarInjector = this.createInjector(snackBarRef, config?.data);
    const snackBarComponent = new ComponentPortal<SnackbarContainerComponent>(
      SnackbarContainerComponent,
      config?.viewContainerRef,
      snackBarInjector,
    );
    this.overlayRef.attach(snackBarComponent);

    return snackBarRef;
  }

  openFromTemplate<T>(template: TemplateRef<any>, config?: SnackBarConfig): SnackBarRef<T> {
    this.overlayRef = this.createOverlay(config);
    const snackBarRef = new SnackBarRef<T>(this.overlayRef, config, template);
    const snackBarInjector = this.createInjector(snackBarRef, config?.data);
    const snackBarComponent = new ComponentPortal<SnackbarContainerComponent>(
      SnackbarContainerComponent,
      config?.viewContainerRef,
      snackBarInjector,
    );
    this.overlayRef.attach(snackBarComponent);

    return snackBarRef;
  }

  private createOverlay(config: SnackBarConfig): OverlayRef {
    const positionStrategy = this.overlay.position().flexibleConnectedTo(this.document.body);

    return this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.document.body)
        .withPositions([this.getOverlayPosition(config)]),
    });
  }

  private createInjector<T, D>(snackBarRef: SnackBarRef<T>, data: D): Injector {
    return Injector.create({
      providers: [
        {
          provide: SnackBarRef,
          useValue: snackBarRef,
        },
        {
          provide: SNACK_BAR_DATA,
          useValue: data,
        },
      ],
      parent: this.injector,
    });
  }

  private getOverlayPosition(positions?: SnackBarConfig): ConnectedPosition {
    const horizontalPosition = positions?.horizontalPosition || 'center';
    const verticalPosition = positions?.verticalPosition || 'bottom';
    return {
      originX: horizontalPosition,
      overlayX: horizontalPosition,
      originY: verticalPosition,
      overlayY: verticalPosition,
    };
  }
}
