import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tTab]',
})
export class TabDirective {
  @Input('tTab') label: string;

  constructor(public template: TemplateRef<any>) {}
}
