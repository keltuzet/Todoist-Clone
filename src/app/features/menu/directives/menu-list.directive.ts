import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMenuList]',
})
export class MenuListDirective {
  constructor(elRef: ElementRef<HTMLElement>) {
    elRef.nativeElement.setAttribute('role', 'menu');
    elRef.nativeElement.classList.add('menu-list');
    elRef.nativeElement.focus();
  }
}
