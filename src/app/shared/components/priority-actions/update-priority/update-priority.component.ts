import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Priority } from '@stores/priorities';
import { DetailedTodo, Todo, TodosQuery, TodosService } from '@stores/todos';
import { Observable } from 'rxjs';
import { SelectPriorityMenuComponent } from '../select-priority-menu/select-priority-menu.component';

@Component({
  selector: 't-update-priority',
  templateUrl: './update-priority.component.html',
  styleUrls: ['./update-priority.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdatePriorityComponent {
  @Input() todo: DetailedTodo;

  readonly selectPriorityMenu = SelectPriorityMenuComponent;

  constructor(private todosService: TodosService) {}

  updatePriority(priority: Priority): void {
    if (!priority && !this.todo) return;
    this.todosService.updateTodo(this.todo.id, { priorityId: priority.id }).subscribe();
  }
}
