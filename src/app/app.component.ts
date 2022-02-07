import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { IconRegistrarService } from '@shared/services';

@Component({
  selector: 't-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: Observable<any[]>;

  constructor(iconRegistrarService: IconRegistrarService, firestore: AngularFirestore) {
    iconRegistrarService.init();
  }
}
