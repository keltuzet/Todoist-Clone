import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 't-select-priority-button',
  templateUrl: './select-priority-button.component.html',
  styleUrls: ['./select-priority-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectPriorityButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
