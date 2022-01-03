import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TodoPriority } from '@shared/models';
import { TodosQuery } from '@stores/todos';

@Component({
  selector: 't-todo-priority-list',
  templateUrl: './todo-priority-list.component.html',
  styleUrls: ['./todo-priority-list.component.scss'],
})
export class TodoPriorityListComponent implements OnInit {
  priorities$ = this.todosQuery.priorities$;
  @Input() selectedPriority: TodoPriority['id'];
  @Output() onselect = new EventEmitter<TodoPriority>();

  constructor(private todosQuery: TodosQuery) {}

  ngOnInit(): void {}

  priorityTrackBy(item: TodoPriority) {
    return item.id;
  }
}
