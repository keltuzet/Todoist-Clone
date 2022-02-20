import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MENU_DATA } from '@features/menu/const';

@Component({
  selector: 't-overlay-example',
  templateUrl: './overlay-example.component.html',
  styleUrls: ['./overlay-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayExampleComponent implements OnInit {
  constructor(@Inject(MENU_DATA) data: any) {
    console.log(data);
  }

  ngOnInit(): void {}
}
