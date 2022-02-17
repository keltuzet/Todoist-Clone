import { ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';
import { Priority } from '@stores/priorities';
import { SvgIconComponent } from 'angular-svg-icon';

@Directive({
  selector: '[tPriorityFlagIcon]',
})
export class PriorityFlagIconDirective {
  @Input('tPriorityFlagIcon') set priority(val: Priority) {
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
