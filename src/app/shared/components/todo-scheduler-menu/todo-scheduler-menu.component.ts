import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-scheduler-menu',
  templateUrl: './todo-scheduler-menu.component.html',
  styleUrls: ['./todo-scheduler-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoSchedulerMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
