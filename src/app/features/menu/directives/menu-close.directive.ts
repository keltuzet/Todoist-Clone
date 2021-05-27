import { Directive } from '@angular/core';
import { MenuRef } from '../models';

@Directive({
  selector: '[appMenuClose]',
  host: {
    '(click)': 'close()',
  },
})
export class MenuCloseDirective {
  constructor(private menuRef: MenuRef) {}

  close() {
    this.menuRef.close();
  }
}
