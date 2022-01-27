import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 't-overlay-example',
  templateUrl: './overlay-example.component.html',
  styleUrls: ['./overlay-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
