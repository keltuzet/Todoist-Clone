import { Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  host: {
    '(mouseenter)': 'handleMouseEnter()',
    '(mouseleave)': 'handleMouseLeave()',
    '(click)': 'handleClick()',
  },
})
export class RadioButtonComponent implements OnInit {
  @Output() change = new EventEmitter<boolean>();
  @HostBinding('class.checked') isChecked = false;
  @ViewChild('checkboxCircle') checkboxCircle: ElementRef<HTMLDivElement>;

  @Input() primary = '#808080';
  @Input() secondary = 'hsla(0,0%,50.2%,.2)';
  @Input() set checked(val: boolean) {
    if (val) {
      this.bgColor = this.primary;
      this.color = '#fff';
    } else {
      this.bgColor = 'transparent';
      this.color = this.primary;
    }
    this.change.next(val);
    this.isChecked = val;
  }
  get checked(): boolean {
    return this.isChecked;
  }

  color: string;
  bgColor = 'transparent';

  ngOnInit() {
    this.color = this.primary;
  }

  toggle() {
    this.checked = !this.checked;
  }

  private handleMouseEnter() {
    if (!this.checked) {
      this.checkboxCircle.nativeElement.style.backgroundColor = this.secondary;
    }
    this.checkboxCircle.nativeElement.style.boxShadow = `0 0 7px ${this.secondary}`;
  }

  private handleMouseLeave() {
    if (!this.checked) {
      this.checkboxCircle.nativeElement.style.backgroundColor = 'transparent';
    }
    this.checkboxCircle.nativeElement.style.boxShadow = 'none';
  }

  private handleClick() {
    this.toggle();
  }
}
