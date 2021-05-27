import { Directive, ElementRef, Injector, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType, DomPortal, TemplatePortal } from '@angular/cdk/portal';
import { BehaviorSubject } from 'rxjs';

import { TooltipComponent } from '../components';
import { TOOLTIP_CONTENT, TOOLTIP_POSITIONS } from '../const';
import { TooltipPosition } from '../models';

@Directive({
  selector: '[appTooltip]',
  host: {
    '(mouseenter)': 'display()',
    '(mouseleave)': 'hide()',
  },
})
export class TooltipDirective implements OnInit {
  private overlayRef: OverlayRef;
  private tooltipInjector: Injector;
  private isHidden = true;
  private tpl$ = new BehaviorSubject<TemplateRef<any> | ComponentType<any> | HTMLElement | null>(null);
  private data$ = new BehaviorSubject<any>(null);
  private currPortal: DomPortal<HTMLElement> | TemplatePortal<any> | ComponentPortal<any>;

  @Input() set tlpTemplate(tpl: TemplateRef<any> | ComponentType<any> | HTMLElement) {
    this.tpl$.next(tpl);
  }
  @Input('appTooltip') set tooltipData(data: any) {
    this.data$.next(data);
  }
  @Input('tlpTemplateContext') tplContext: any;
  @Input('tlpPosition') position: TooltipPosition = 'below';

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private injector: Injector,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
  ) {}

  ngOnInit() {
    this.init();

    this.tpl$.subscribe(this.setPortal);
  }

  private setPortal = (tpl: TemplateRef<any> | ComponentType<any> | HTMLElement) => {
    switch (true) {
      case !tpl:
        return (this.currPortal = new ComponentPortal(TooltipComponent, null, this.tooltipInjector));
      case tpl instanceof TemplateRef:
        return (this.currPortal = new TemplatePortal(tpl as TemplateRef<any>, this.viewContainerRef, this.tplContext));
      case tpl instanceof HTMLElement:
        return (this.currPortal = new DomPortal(tpl as HTMLElement));
      default:
        this.currPortal = new ComponentPortal(tpl as ComponentType<any>);
    }
  };

  private init() {
    this.tooltipInjector = Injector.create({
      providers: [
        {
          provide: TOOLTIP_CONTENT,
          useValue: this.data$,
        },
      ],
      parent: this.injector,
    });
  }

  display() {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elRef)
        .withPositions([TOOLTIP_POSITIONS[this.position]]),
    });

    this.overlayRef.attach(this.currPortal);
  }

  hide() {
    this.overlayRef.dispose();
  }

  toggle() {
    this.isHidden ? this.display() : this.hide();
  }
}
