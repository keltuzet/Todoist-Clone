import { Component, Input, OnInit } from '@angular/core';
import { TodoPriority } from '@http/models';
import { TodosQuery } from '@stores/todos';

@Component({
  selector: 'app-todo-priority-list',
  templateUrl: './todo-priority-list.component.html',
  styleUrls: ['./todo-priority-list.component.scss'],
})
export class TodoPriorityListComponent implements OnInit {
  priorities$ = this.todosQuery.priorities$;
  @Input() selectedPriority: TodoPriority["id"];

  constructor(private todosQuery: TodosQuery) {}

  ngOnInit(): void {}

  priorityTrackBy(item: TodoPriority) {
    return item.id;
  }
}
