import { Component, OnInit } from '@angular/core';
import { APP_ROUTES } from '@shared/const';
import { AppDateRef } from '@shared/services';

@Component({
  selector: 'app-nav-main-list',
  templateUrl: './nav-main-list.component.html',
  styleUrls: ['./nav-main-list.component.scss'],
})
export class MainListComponent implements OnInit {
  today: number;
  routes = APP_ROUTES;

  constructor(private appDateRef: AppDateRef) {}

  ngOnInit(): void {
    this.today = this.appDateRef.now.getDate();
  }
}
