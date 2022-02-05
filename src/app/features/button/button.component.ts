import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { ButtonColor, ButtonTheme } from './button-config';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[tButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() color: ButtonColor = ButtonColor.Basic;
  @Input() theme: ButtonTheme = ButtonTheme.Basic;

  @HostBinding('class') get cssClass(): string[] {
    return ['button', this.getColorCSSClass(this.color), this.getThemeCSSClass(this.theme)];
  }

  @HostBinding('attr.type') type = 'button';

  private getThemeCSSClass(theme: ButtonTheme = ButtonTheme.Basic): string {
    return `theme-${theme}`;
  }

  private getColorCSSClass(color: ButtonColor = ButtonColor.Basic): string {
    return `color-${color}`;
  }
}
