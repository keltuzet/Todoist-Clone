import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Timestamp } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FaqQuery, FaqService } from '@stores/faq';
import { Timestamp } from 'firebase/firestore';
import { filter } from 'rxjs';

@Component({
  selector: 't-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent implements OnInit {
  addForm = new FormGroup({
    question: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required),
  });
  list$ = this.faqQuery.selectAll();
  items: any[];

  constructor(private faqQuery: FaqQuery, private faqService: FaqService, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.faqQuery
      .selectAll()
      .pipe(filter(list => Boolean(list.length)))
      .subscribe(faqList => {
        this.items = faqList;
        console.log(faqList);
      });

      const date = new Timestamp(new Date().getTime()/1000, 0);
      console.log(date);
      console.log(date.toDate());
    // this.firestore.collection('faq').valueChanges().subscribe(console.log);
    // this.faqService.collection.
  }

  add(): void {
    if (this.addForm.invalid) return;

    console.log(this.faqService.add({ ...this.addForm.value }));
  }

  remove(): void {
    if (this.items.length <= 1) return;
    this.faqService.remove(this.items[0].id);
  }
}
