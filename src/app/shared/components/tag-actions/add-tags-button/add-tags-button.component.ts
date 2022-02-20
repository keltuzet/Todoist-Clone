import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { SelectTagsMenuComponent } from '../select-tags-menu/select-tags-menu.component';

@Component({
  selector: 't-add-tags-button',
  templateUrl: './add-tags-button.component.html',
  styleUrls: ['./add-tags-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTagsButtonComponent {
  @Input() tagIds: string[];
  @Output() tagIdsChange = new EventEmitter<string[]>();
  readonly selectTagsMenu = SelectTagsMenuComponent;

  updateTags(ids: string[]): void {
    if (!ids || ids === this.tagIds) return;
    this.tagIdsChange.emit(ids);
  }
}
