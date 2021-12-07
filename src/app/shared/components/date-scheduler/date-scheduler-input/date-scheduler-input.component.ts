import { Component, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { isNil } from '@shared/utils';
import * as moment from 'moment';
import { Observable, Subject } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 't-date-scheduler-input',
  templateUrl: './date-scheduler-input.component.html',
  styleUrls: ['./date-scheduler-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateSchedulerInputComponent implements OnInit {
  readonly dateControl = new FormControl('');
  isSearchInpEmpty$: Observable<boolean>;
  readonly submit$ = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
    this.isSearchInpEmpty$ = this.dateControl.valueChanges.pipe(
      startWith(this.dateControl.value),
      tap(console.log),
      map((val: string) => !val.trim()),
    );
  }

  handleSubmit(): void {
    // if () {
    //   this.submit$.next();
    // }
  }

  checkIsControlValid(dateStr: string): boolean {
  //   dateStr = dateStr.trim();
  //   const dateElements = dateStr.split(' ');
  //   let day: number;
  //   let month: number;
  //   let year: number;
  //   let hasMonth: boolean;

  //   const dayOrMonth = dateElements.find(() )

  //   for (const dateElement of dateElements) {
  //     const parsedNum: number = +dateElement;
  //     const isNotNumber: boolean = isNaN(parsedNum);

  //     if (isNil(month)) {
  //       if (isNotNumber) {
  //         if (isMonthName(dateElement)) {
  //           hasMonth = true;
  //           continue;
  //         }
  //       } else {
  //         if (isMonthNumber(parsedNum)) {
  //           hasMonth = true;
  //           continue;
  //         }
  //       }
  //     }

  //     if (isNil(day) && isMonthNumber(dateElement)) {

  //     }
  //   }
    return true;
  }
}

function isMonthNumber(num: number): boolean {
  return 0 < num && num <= 12;
}

function isMonthName(str: string): boolean {
  return moment.months().includes(str) || moment.monthsShort().includes(str);
}
