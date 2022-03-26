import { Component, isDevMode } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AuthQuery } from '@auth/stores';
import { IconRegistrarService, ThemesService } from '@shared/services';
import * as moment from 'moment';

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
    themesService: ThemesService
  ) {
    iconRegistrarService.init();
    themesService.init();
    this.logAppinfo();
    // console.log('12:20am'.exec());
    console.log(/(?<hours>\d{1,2})(:(?<minutes>\d{1,2}))?(?<meridian>(am|pm))?$/gi.exec('12'));
    // console.log(moment(' lk das d', 'MMM YYYY').toJSON());
    // console.log(moment(moment('1 Авг 17 13:00', 'DD MMM YYYY hh:mm').toJSON()).toString());
  }

  logAppinfo(): void {
    if (!isDevMode) return;
    console.table(this.firestore.firestore.app.options);
  }
}
