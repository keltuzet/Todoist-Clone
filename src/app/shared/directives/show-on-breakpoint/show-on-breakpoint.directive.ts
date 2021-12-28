import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

type BreakpointScreenSizes = keyof typeof Breakpoints;

@Directive({
  selector: '[tShowOnBreakpoint]',
})
export class ShowOnBreakpointDirective implements OnInit {
  @Input('tShowOnBreakpoint') protected breakpointNames: BreakpointScreenSizes | BreakpointScreenSizes[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit(): void {
    const breakpoints = (Array.isArray(this.breakpointNames) ? this.breakpointNames : [this.breakpointNames]).map(
      (name) => Breakpoints[name],
    );
    this.breakpointObserver.observe(breakpoints).subscribe((result) => {
      this.viewContainer.clear();
      if (result.matches) this.viewContainer.createEmbeddedView(this.templateRef);
    });
  }
}

@Directive({
  selector: '[tShowOnDesktop]',
})
export class ShowOnDesktopDirective extends ShowOnBreakpointDirective {
  protected breakpointNames: BreakpointScreenSizes | BreakpointScreenSizes[] = ['Large', 'XLarge'];
}
