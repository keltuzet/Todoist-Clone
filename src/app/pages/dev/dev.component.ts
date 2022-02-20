import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FaqQuery } from '@stores/faq/faq.query';
import { FaqService } from '@stores/faq/faq.service';
import { delay, of } from 'rxjs';
import { OverlayExampleComponent } from './overlay-example/overlay-example.component';

@Component({
  selector: 't-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevComponent implements OnInit {
  menu = OverlayExampleComponent;
  data$ = of('ha-ha!').pipe(delay(300));

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {}

  add() {}
}
