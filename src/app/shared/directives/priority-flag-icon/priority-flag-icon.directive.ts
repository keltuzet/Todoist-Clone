import { ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';
import { Priority } from '@stores/priorities';
import { SvgIconComponent } from 'angular-svg-icon';

@Directive({
  selector: '[tPriorityFlagIcon]',
})
export class PriorityFlagIconDirective {
  @Input('tPriorityFlagIcon') set priority(val: Priority) {
    this.svgIcon.name = this.getIconName(val);
    this.elementRef.nativeElement.style.color = this.getIconColor(val);
    this.changeDetectorRef.detectChanges();
  }

  constructor(
    private svgIcon: SvgIconComponent,
    private elementRef: ElementRef<HTMLElement>,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  private getIconName(priority?: Priority): string {
    if (!priority || priority?.default) return 'transparent-flag';
    return 'flag';
  }

  private getIconColor(priority?: Priority): string {
    return priority?.colors?.primary || '';
  }
}
