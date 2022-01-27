import { ConnectedPosition, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Inject, ViewChild, ElementRef } from '@angular/core';
import { OverlayExampleComponent } from './overlay-example/overlay-example.component';

@Component({
  selector: 't-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevComponent implements OnInit {
  @ViewChild('p', { static: true }) p: ElementRef<HTMLParagraphElement>;

  constructor(private overlay: Overlay, @Inject(DOCUMENT) private doc: Document) {}

  ngOnInit(): void {
    const portal = new ComponentPortal(OverlayExampleComponent);
    // this.overlay.position().global().attach();
    const position: ConnectedPosition[] = [
      {
        originX: 'start',
        originY: 'center',
        overlayX: 'center',
        overlayY: 'center',

      },
    ];
    console.log(this.p);
    const ref = this.overlay.create({
      // scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy: this.overlay.position().flexibleConnectedTo(this.p.nativeElement).withPositions(position),
      // width: 200,
      // height: 300,
      // maxWidth: 250,
      // disposeOnNavigation: true,
    });
    ref.attach(portal);
  }
}
