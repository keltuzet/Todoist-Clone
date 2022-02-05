import { ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

import { TodoPriority } from '@shared/models';

@Directive({
  selector: '[tPriorityFlagIcon]',
})
export class PriorityFlagIconDirective {
  @Input('tPriorityFlagIcon') set priority(val: TodoPriority) {
    if (!val) return;
    this.svgIcon.name = val.default ? 'transparent-flag' : 'flag';
    this.elementRef.nativeElement.style.color = val.colors.primary;
    this.changeDetectorRef.detectChanges();
  }

  constructor(
    private svgIcon: SvgIconComponent,
    private elementRef: ElementRef<HTMLElement>,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}
}
