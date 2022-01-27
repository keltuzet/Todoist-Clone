import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType, TemplatePortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Injector,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UnsubscribeService } from '@shared/services';
import { MenuComponent } from '../components';
import { getOpposite, getOppositeSides, getPositions, MENU_DATA, MENU_POSITIONS } from '../const';
import { MenuPosition, MenuRef } from '../models';

@Directive({
  selector: '[tMenuTrigger]',
  providers: [UnsubscribeService],
})
export class MenuTriggerDirective implements OnInit {
  private overlayRef: OverlayRef;
  private portal: TemplatePortal<any> | ComponentPortal<any>;
  private menuInjector: Injector;
  private menuRef = new MenuRef();
  private data$ = new BehaviorSubject<any>(null);

  @Input('tMenuTrigger') set target(val: TemplateRef<any> | ComponentType<any>) {
    this.portal =
      val instanceof TemplateRef
        ? new TemplatePortal(val, this.viewContainerRef)
        : new ComponentPortal(val, null, this.menuInjector);
  }
  @Input('menuData') set tooltipData(data: any) {
    this.data$.next(data);
  }
  @Input('menuPosition') position: MenuPosition = 'below';

  @Output() afterClose = new EventEmitter<any>();

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private injector: Injector,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private unsubscribe: UnsubscribeService,
  ) {
    this.earlyInit();
  }

  ngOnInit(): void {
    this.menuRef.close$.pipe(takeUntil(this.unsubscribe)).subscribe((value) => {
      this.afterClose.emit(value);
      this.closeMenu();
    });
  }

  earlyInit(): void {
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

  private createOverlay(): OverlayRef {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elRef)
        .withPositions(getPositions(this.position)),
      hasBackdrop: true,
      backdropClass: 'transparent-backdrop',
    });
    overlayRef
      .backdropClick()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.afterClose.emit();
        this.closeMenu();
      });
    return overlayRef;
  }

  closeMenu(): void {
    this.overlayRef.dispose();
  }

  @HostListener('click') openMenu(): void {
    this.overlayRef = this.createOverlay();
    const ref: ComponentRef<MenuComponent> = this.overlayRef.attach(this.portal);
  }
}
