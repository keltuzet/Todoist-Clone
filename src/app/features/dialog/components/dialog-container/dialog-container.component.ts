import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 't-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
