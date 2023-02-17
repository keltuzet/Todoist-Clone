import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Project } from '@stores/projects';

@Component({
  selector: 't-select-project-button',
  templateUrl: './select-project-button.component.html',
  styleUrls: ['./select-project-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectProjectButtonComponent implements OnInit {
  @Input() project: Project;
  @Output() projectChange = new EventEmitter<Project>();

  constructor() {}

  ngOnInit(): void {}
}
