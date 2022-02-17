import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Priority } from '@stores/priorities';
import { TodosQuery } from '@stores/todos';

@Component({
  selector: 't-todo-priority-list',
  templateUrl: './todo-priority-list.component.html',
  styleUrls: ['./todo-priority-list.component.scss'],
})
export class PriorityListComponent implements OnInit {
  priorities$ = this.todosQuery.priorities$;
  @Input() selectedPriority: Priority['id'];
  @Output() onselect = new EventEmitter<Priority>();

  constructor(private todosQuery: TodosQuery) {}

  ngOnInit(): void {}

  priorityTrackBy(item: Priority): string {
    return item.id;
  }
}
