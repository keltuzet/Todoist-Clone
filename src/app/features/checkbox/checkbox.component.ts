import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  HostListener,
  ElementRef,
  forwardRef,
  HostBinding,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { generateHostID } from '@shared/utils';
import { CheckboxTheme, CHECKBOX_CHECKED_PATH, CHECKBOX_EMPTY_PATH } from './checkbox.const';

@Component({
  selector: 't-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true }],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() set checked(value: boolean) {
    this.value = value;
    this.onChange(value);
    this.onTouch(value);
  }
  get checked(): boolean {
    return this.value;
  }
  @Input() svgClass: string;
  @Input() ariaLabel: string;
  private value: boolean;

  @Output() readonly checkedChange = new EventEmitter<boolean>();
  @Input() theme: CheckboxTheme = CheckboxTheme.Primary;

  @HostBinding('class') get CSSClass(): Dictionary<boolean> {
    return {
      [this.theme]: true,
      checked: this.checked,
    };
  }

  readonly hostID = generateHostID(this.host);
  readonly checkedPath = CHECKBOX_CHECKED_PATH;
  readonly emptyPath = CHECKBOX_EMPTY_PATH;

  constructor(private host: ElementRef<HTMLElement>) {}

  onChange: any = () => {};
  onTouch: any = () => {};

  @HostListener('click') toggle(): void {
    const newValue = !this.checked;
    this.checked = newValue;
    this.checkedChange.emit(newValue);
  }

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
