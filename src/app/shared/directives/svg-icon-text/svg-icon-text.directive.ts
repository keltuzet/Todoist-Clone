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
    if (!val) {
      return;
    }
    this.text$.next(val);
  }

  constructor(private host: ElementRef<Node>) {}

  ngAfterViewInit(): void {
    this.$sub = this.text$.subscribe((newText) => {
      if (!this.textNodes) this.queryTextNodes();

      this.writeText(newText);
    });
  }

  ngOnDestroy(): void {
    this.$sub?.unsubscribe();
  }

  queryTextNodes(): void {
    this.textNodes = this.getText(this.host.nativeElement);
  }

  writeText(text: string): void {
    if (this.textNodes.length) {
      this.textNodes[0].nodeValue = text;
    }
  }

  getText(node: Node): Node[] {
    function recursor(n: Node): Node[] {
      let i: number;
      let a: Node[] = [];
      if (n.nodeType !== 3) {
        if (n.childNodes) {
          for (i = 0; i < n.childNodes.length; ++i) {
            a = a.concat(recursor(n.childNodes[i]));
          }
        }
      } else {
        a.push(n);
      }
      return a;
    }
    return recursor(node);
  }
}
