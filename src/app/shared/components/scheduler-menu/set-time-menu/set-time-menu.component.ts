import { Component, ChangeDetectionStrategy, HostBinding, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuRef, MENU_DATA } from 'todoist-menu';
import { timeInputValidator } from '@shared/validators';

@Component({
  selector: 't-set-time-menu',
  templateUrl: './set-time-menu.component.html',
  styleUrls: ['./set-time-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetTimeMenuComponent {
  @HostBinding('class.menu') readonly menuListCssClass = true;
  readonly time = new FormControl(null, [timeInputValidator]);
  get displayWarning(): boolean {
    return (this.time.touched || this.time.dirty) && this.time.invalid;
  }

  constructor(private menuRef: MenuRef, @Inject(MENU_DATA) public label: string) {}

  submit(event: Event): void {
    event.preventDefault();
    if (this.time.invalid) return;
    this.menuRef.close(this.time.value);
  }
}
