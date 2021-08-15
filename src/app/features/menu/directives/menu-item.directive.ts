import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMenuItem]',
})
export class MenuItemDirective {
  constructor(elRef: ElementRef<HTMLElement>) {
    elRef.nativeElement.classList.add('menu-item');
    elRef.nativeElement.setAttribute('role', 'menuitem');
    elRef.nativeElement.setAttribute('tabindex', '0');
  }
}
