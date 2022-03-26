import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 't-theme-view-card',
  templateUrl: './theme-view-card.component.html',
  styleUrls: ['./theme-view-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeViewCardComponent implements OnInit {
  @Input() topBarColor: string;
  @Input() topBarTextColor: string;
  @Input() contentColor: string;
  @Input() contentTextColor: string;
  @Input() buttonColor: string;
  @Input() checkboxColor = 'transparent';
  @Input() starColor = 'transparent';
  @Input() borderColor = '#e6e6e6';
  @Input() height = 77;
  @Input() width = 166;

  constructor() { }

  ngOnInit(): void {
  }

}
