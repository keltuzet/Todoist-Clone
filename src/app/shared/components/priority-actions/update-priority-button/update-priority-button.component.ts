import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { PrioritiesQuery, Priority } from '@stores/priorities';
import { BehaviorSubject } from 'rxjs';
import { SelectPriorityMenuComponent } from '../select-priority-menu/select-priority-menu.component';

@Component({
  selector: 't-update-priority-button',
  templateUrl: './update-priority-button.component.html',
  styleUrls: ['./update-priority-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdatePriorityButtonComponent implements OnInit {
  @Input('priority') set setPriority(value: Priority) {
    this.priority$.next(value);
  }
  @ViewChild('container', { static: true, read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild('icon', { static: true, read: TemplateRef }) icon: TemplateRef<any>;
  @Output() priorityChange = new EventEmitter<Priority>();
  readonly selectPriorityMenu = SelectPriorityMenuComponent;
  readonly priority$ = new BehaviorSubject<Priority>(null);
  readonly priorities$ = this.prioritiesQuery.selectAll();

  constructor(private prioritiesQuery: PrioritiesQuery) {}

  ngOnInit(): void {
    this.priority$.subscribe(priority => this.renderIcon(priority));
  }

  updatePriority(priority: Priority): void {
    if (!priority) return;
    this.priorityChange.emit(priority);
  }

  private renderIcon(priority: Priority): void {
    this.container.clear();
    this.container.createEmbeddedView(this.icon, { priority });
  }
}
