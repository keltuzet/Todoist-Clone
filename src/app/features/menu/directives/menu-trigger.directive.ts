import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType, TemplatePortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Directive,
  ElementRef,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { isNil } from '@datorama/akita';
import { BehaviorSubject, merge, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { MenuComponent } from '../components';
import { MENU_DATA, MENU_POSITIONS } from '../const';
import { MenuPosition, MenuRef } from '../models';

@Directive({
  selector: '[appMenuTrigger]',
  host: {
    '(click)': 'open()',
  },
})
export class MenuTriggerDirective implements OnInit, OnDestroy {
  private overlayRef: OverlayRef;
  private portal: TemplatePortal<any> | ComponentPortal<any>;
  private menuInjector: Injector;
  private menuRef = new MenuRef();
  private data$ = new BehaviorSubject<any>(null);
  private $subscription = new Subscription();

  @Input('appMenuTrigger') set target(val: TemplateRef<any> | ComponentType<any>) {
    this.portal =
      val instanceof TemplateRef
        ? new TemplatePortal(val, this.viewContainerRef)
        : new ComponentPortal(val, null, this.menuInjector);
  }
  @Input('menuData') set tooltipData(data: any) {
    this.data$.next(data);
  }
  @Input('menuPosition') position: MenuPosition = 'below';

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private injector: Injector,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
  ) {
    this.earlyInit();
  }

  ngOnInit() {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elRef)
        .withPositions([MENU_POSITIONS[this.position]]),
      hasBackdrop: true,
      backdropClass: 'transparent-backdrop',
    });

    this.$subscription.add(
      merge(this.menuRef.close$, this.overlayRef.backdropClick()).subscribe(() => {
        this.close();
      }),
    );
  }

  earlyInit() {
    this.menuInjector = Injector.create({
      providers: [
        {
          provide: MenuRef,
          useValue: this.menuRef,
        },
        {
          provide: MENU_DATA,
          useValue: this.data$,
        },
      ],
      parent: this.injector,
    });
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe;
  }

  close() {
    this.overlayRef.detach();
  }

  open() {
    const ref: ComponentRef<MenuComponent> = this.overlayRef.attach(this.portal);
  }
}
