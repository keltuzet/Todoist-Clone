import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { applyTransaction } from '@datorama/akita';

import { AuthorsService } from '@stores/authors';
import { ProjectsService } from '@stores/projects';
import { TodosQuery, TodosService } from '@stores/todos';
import { SortMenuComponent } from './components/sort-menu/sort-menu.component';

@Component({
  selector: 'app-todays',
  templateUrl: './todays.component.html',
  styleUrls: ['./todays.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodaysComponent implements OnInit {
  today = new Date();
  sortMenu = SortMenuComponent;
  todays$ = this.todosQuery.selectTodays(this.today);
  overdue$ = this.todosQuery.selectOverdue();

  constructor(
    private projectsService: ProjectsService,
    private todosService: TodosService,
    private todosQuery: TodosQuery,
    private authorsService: AuthorsService,
  ) {}

  ngOnInit() {
    applyTransaction(() => {
      this.projectsService.get().subscribe();
      this.todosService.getTodos().subscribe();
      this.authorsService.get().subscribe();
    });
  }
}
