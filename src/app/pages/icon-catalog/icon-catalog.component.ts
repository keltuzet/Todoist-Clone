import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SVG_ICONS } from '@shared/const';

@Component({
  selector: 't-icon-catalog',
  templateUrl: './icon-catalog.component.html',
  styleUrls: ['./icon-catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCatalogComponent implements OnInit {
  icons = SVG_ICONS;

  constructor() {}

  ngOnInit(): void {}
}
