import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ApplicationStateService } from '@shared/components/product/application-state.service';

@Directive({
  selector: '[appLayoutFor]',
})
export class LayoutForDirective {
  @Input() set appLayoutFor(val: 'mobile' | 'desktop') {
    if (this.applicationState.getIsMobileResolution() && val === 'mobile') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }

    if (!this.applicationState.getIsMobileResolution() && val === 'desktop') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private applicationState: ApplicationStateService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}
}
