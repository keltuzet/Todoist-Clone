import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FaqQuery } from '@stores/faq/faq.query';
import { FaqService } from '@stores/faq/faq.service';

@Component({
  selector: 't-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevComponent implements OnInit {
  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.db
      .list('cars')
      .snapshotChanges()
      .subscribe(snapshot => {
        console.log(snapshot.map(item => ({ key: item.payload.key, ...(item.payload.val() as object) })));
      });
  }

  add() {
    this.db.list('cars').update('0', { model: 'Lada', color: 'white' });
  }
}
