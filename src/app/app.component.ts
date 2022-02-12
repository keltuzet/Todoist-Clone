import { Component, isDevMode } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AuthQuery } from '@auth/stores';
import { IconRegistrarService } from '@shared/services';

@Component({
  selector: 't-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly loading$ = this.authQuery.selectLoading();

  constructor(
    private firestore: AngularFirestore,
    private authQuery: AuthQuery,
    iconRegistrarService: IconRegistrarService,
  ) {
    iconRegistrarService.init();
    this.logAppinfo();
  }

  logAppinfo(): void {
    if (!isDevMode) return;
    console.table(this.firestore.firestore.app.options);
  }
}
