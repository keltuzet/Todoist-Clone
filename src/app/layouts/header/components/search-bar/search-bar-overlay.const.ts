import { CdkConnectedOverlay, ConnectionPositionPair, Overlay } from '@angular/cdk/overlay';

export function getSearchBarOverlayOptions(overlay: Overlay): Partial<CdkConnectedOverlay> {
  return {
    positions: [
      new ConnectionPositionPair(
        { originX: 'start', originY: 'bottom' },
        { overlayX: 'start', overlayY: 'top' },
        0, 4
      ),
    ],
    scrollStrategy: overlay.scrollStrategies.reposition(),
    hasBackdrop: true,
    backdropClass: 'transparent-backdrop',
    minHeight: 32,
    flexibleDimensions: true,
  };
}
