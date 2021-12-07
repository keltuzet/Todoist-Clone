import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 't-date-tasks-section',
  templateUrl: './date-tasks-section.component.html',
  styleUrls: ['./date-tasks-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateTasksSectionComponent implements OnInit {
  @Input() date: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
