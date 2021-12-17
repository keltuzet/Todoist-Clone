import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
  ComponentFactoryResolver,
  HostBinding,
} from '@angular/core';
import { SNACK_BAR_DATA } from '@features/snackbar/snackbar-config';
import { SnackBarRef } from '@features/snackbar/snackbar-ref';

@Component({
  selector: 't-snackbar-container',
  templateUrl: './snackbar-container.component.html',
  styleUrls: ['./snackbar-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarContainerComponent implements OnInit, OnDestroy {
  message: string;
  action: string;

  @ViewChild('contentContainer', { static: true, read: ViewContainerRef }) container: ViewContainerRef;

  @HostBinding('class.apply-default-theme') get defaultTheme(): boolean {
    return !this.snackBarRef.config?.disuseDefaultTheme;
  }

  constructor(
    public snackBarRef: SnackBarRef<any>,
    @Inject(SNACK_BAR_DATA) public data: any,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnInit(): void {
    if (this.snackBarRef.hasContent) {
      if (this.snackBarRef.content instanceof TemplateRef) {
        this.container.createEmbeddedView(this.snackBarRef.content);
      } else {
        this.container.createComponent(this.componentFactoryResolver.resolveComponentFactory(this.snackBarRef.content));
      }
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.snackBarRef.durationTimeoutId);
  }
}
