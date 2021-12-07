import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 't-date-scheduler',
  templateUrl: './date-scheduler.component.html',
  styleUrls: ['./date-scheduler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateSchedulerComponent implements OnInit {
  date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
