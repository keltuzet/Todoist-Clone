import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GroupTodosByComponent } from '../group-todos-by/group-todos-by.component';

@Component({
  selector: 't-display-todos-menu',
  templateUrl: './display-todos-menu.component.html',
  styleUrls: ['./display-todos-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayTodosMenuComponent implements OnInit {
  menuGroupBy = GroupTodosByComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
