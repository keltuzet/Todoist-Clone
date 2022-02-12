import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SelectTagsMenuComponent } from '@shared/components/select-tags-menu/select-tags-menu.component';

@Component({
  selector: 't-select-tags-button',
  templateUrl: './select-tags-button.component.html',
  styleUrls: ['./select-tags-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectTagsButtonComponent {
  readonly menu = SelectTagsMenuComponent;ы
}
