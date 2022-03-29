import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeRu from '@angular/common/locales/ru';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DatabaseModule } from '@angular/fire/database';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { NgxSpinnerModule } from 'ngx-spinner';
import * as moment from 'moment';

import { SnackbarModule } from '@features/snackbar';
import { AuthModule } from '@auth/auth.module';
import { environment } from '../environments/environment';
import { PageLayoutModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(localeRu);
moment.locale('ru');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    OverlayModule,
    ReactiveFormsModule,
    CommonModule,
    SnackbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    DatabaseModule,
    PageLayoutModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AuthModule,
    NgxSpinnerModule,
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: environment.baseApi,
      },
    },
    {
      provide: LOCALE_ID,
      useValue: 'ru',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
