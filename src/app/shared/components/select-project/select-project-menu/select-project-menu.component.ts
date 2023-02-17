import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 't-select-project-menu',
  templateUrl: './select-project-menu.component.html',
  styleUrls: ['./select-project-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectProjectMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
