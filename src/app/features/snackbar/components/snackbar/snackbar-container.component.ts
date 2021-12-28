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
import { appearSnackbarAnimation } from '@shared/animations';

@Component({
  selector: 't-snackbar-container',
  templateUrl: './snackbar-container.component.html',
  styleUrls: ['./snackbar-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [appearSnackbarAnimation],
})
export class SnackbarContainerComponent implements OnInit, OnDestroy {
  message: string;
  action: string;

  @ViewChild('contentContainer', { static: true, read: ViewContainerRef }) container: ViewContainerRef;

  @HostBinding('class.apply-default-theme') get defaultTheme(): boolean {
    return !this.snackBarRef.config?.disuseContainerTheme;
  }

  @HostBinding('@appearSnackbar') get appearSnackbarAnimation(): boolean {
    /*
      Returns expected value but animation works anyway
      Should update this cases
    */
    return !this.snackBarRef.config?.disuseContainerAnimation;
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
