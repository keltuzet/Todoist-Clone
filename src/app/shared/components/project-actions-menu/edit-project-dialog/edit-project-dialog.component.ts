import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 't-edit-project-dialog',
  templateUrl: './edit-project-dialog.component.html',
  styleUrls: ['./edit-project-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProjectDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
