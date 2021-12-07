import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 't-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss'],
})
export class UpcomingComponent implements OnInit, OnDestroy {
  dates: Date[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const periodDate = new Date();
    const periodMonthDay = periodDate.getDate();
    for (let i = 0; i <= 15; i++) {
      periodDate.setDate(periodMonthDay + i);
      this.dates[i] = new Date(periodDate);
    }
  }

  ngOnDestroy(): void {}
}
