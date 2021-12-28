import { Overlay } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { DialogConfig, DIALOG_DATA } from './dialog-config';
import { DialogRef } from './dialog-ref';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private injector: Injector, private overlay: Overlay) {}

  open<T, D = any, R = any>(component: ComponentType<T>, config?: DialogConfig<D>): DialogRef<T, R> {
    const dialogRef = new DialogRef<T, R>();
    return dialogRef;
  }

  // private createInjector<D>(data: D): Injector {
  //   return Injector.create({
  //     providers: [
  //       {
  //         provide: DIALOG_DATA,
  //         use
  //       }
  //     ]
  //   });
  // }
}
