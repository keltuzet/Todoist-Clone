import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { applyTransaction } from '@datorama/akita';

import { AuthorsService } from '@stores/authors';
import { ProjectsService } from '@stores/projects';
import { TagsService } from '@stores/tags';
import { TodosQuery, TodosService } from '@stores/todos';
import { tap } from 'rxjs/operators';
import { SortMenuComponent } from './components/sort-menu/sort-menu.component';

@Component({
  selector: 't-todays',
  templateUrl: './todays.component.html',
  styleUrls: ['./todays.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodaysComponent implements OnInit {
  today = new Date();
  sortMenu = SortMenuComponent;
  todays$ = this.todosQuery.selectTodays(this.today);
  overdue$ = this.todosQuery.selectOverdue().pipe().subscribe();

  constructor(
    private projectsService: ProjectsService,
    private todosService: TodosService,
    private todosQuery: TodosQuery,
    private authorsService: AuthorsService,
    private tagsService: TagsService
  ) {}

  ngOnInit(): void {
  }
}
