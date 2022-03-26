import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { SNACK_BAR_DATA } from '@features/snackbar';

@Component({
  selector: 't-action-completed-details',
  templateUrl: './action-completed-details.component.html',
  styleUrls: ['./action-completed-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionCompletedDetailsComponent implements OnInit {
  constructor(@Inject(SNACK_BAR_DATA) public data: any) {}

  ngOnInit(): void {}
}
