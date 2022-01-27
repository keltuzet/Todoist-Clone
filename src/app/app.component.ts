import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IconRegistrarService } from '@shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 't-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Observable<any[]>;

  constructor(iconRegistrarService: IconRegistrarService, firestore: AngularFirestore) {
    iconRegistrarService.init();
    // this.items = firestore.collection('items').valueChanges();
  }
}
