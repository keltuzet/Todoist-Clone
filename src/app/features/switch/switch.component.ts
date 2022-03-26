import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  forwardRef,
  ElementRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { generateHostID } from '@shared/utils';

@Component({
  selector: 't-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SwitchComponent), multi: true }],
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() set checked(value: boolean) {
    this.value = value;
    this.onChange(value);
    this.onTouch(value);
  }
  get checked(): boolean {
    return this.value;
  }
  private value: boolean;

  @Output() checkedChange = new EventEmitter<boolean>();
  readonly hostId = generateHostID(this.host);

  @HostBinding('class.checked') get checkedCSSClass(): boolean {
    return this.checked;
  }

  constructor(private host: ElementRef<HTMLElement>) {}

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  toggle(): void {
    const newValue = !this.checked;
    this.checked = newValue;
    this.checkedChange.emit(newValue);
  }

  private generateID(): string {
    return (Math.random() * 1e10).toFixed().toString();
  }
}
