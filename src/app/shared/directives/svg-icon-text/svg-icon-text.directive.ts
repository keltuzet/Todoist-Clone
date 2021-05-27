import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Directive({
  selector: '[appSvgIconText]',
})
export class SvgIconTextDirective implements AfterViewInit, OnDestroy {
  text$ = new BehaviorSubject<string>(null);
  $sub: Subscription;
  textNodes: Node[];

  @Input('appSvgIconText') set text(val: string) {
    if (!val) return;
    this.text$.next(val);
  }

  constructor(private host: ElementRef<Node>) {}

  ngAfterViewInit() {
    this.$sub = this.text$.subscribe((newText) => {
      if (!this.textNodes) {
        this.textNodes = this.getText(this.host.nativeElement);
      } else if (this.textNodes.length) this.textNodes[0].nodeValue = newText;
    });
  }

  ngOnDestroy() {
    this.$sub?.unsubscribe();
  }

  getText(node: Node): Node[] {
    function recursor(n: Node) {
      let i: number;
      let a: Node[] = [];
      if (n.nodeType !== 3) {
        if (n.childNodes) for (i = 0; i < n.childNodes.length; ++i) a = a.concat(recursor(n.childNodes[i]));
      } else a.push(n);
      return a;
    }
    return recursor(node);
  }
}
