import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeRu from '@angular/common/locales/ru';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ProjectModule } from './pages/project/project.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLayoutModule } from './layouts';
import { ProductModule } from './shared/components/product/product.module';
import * as moment from 'moment';
import { SnackbarModule } from '@features/snackbar/snackbar.module';
import { DevComponent } from './pages/dev/dev.component';
import { OverlayExampleComponent } from './pages/dev/overlay-example/overlay-example.component';

registerLocaleData(localeRu);

moment.locale('ru');

@NgModule({
  declarations: [AppComponent, DevComponent, OverlayExampleComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ProjectModule,
    OverlayModule,
    ReactiveFormsModule,
    CommonModule,
    ProductModule,
    SnackbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
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
