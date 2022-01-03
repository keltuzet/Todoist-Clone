import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 't-sort-todos',
  templateUrl: './sort-todos.component.html',
  styleUrls: ['./sort-todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortTodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
