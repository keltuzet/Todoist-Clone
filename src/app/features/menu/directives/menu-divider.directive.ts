import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMenuDivider]',
})
export class MenuDividerDirective {
  constructor(elRef: ElementRef<HTMLElement>) {
    elRef.nativeElement.classList.add('menu-divider');
    elRef.nativeElement.setAttribute('aria-hidden', 'true');
  }
}
