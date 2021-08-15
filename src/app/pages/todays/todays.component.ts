import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { applyTransaction } from '@datorama/akita';
import { ProjectTestService } from '@pages/project/project-test.service';

import { AuthorsService } from '@stores/authors';
import { ProjectsService } from '@stores/projects';
import { TagsService } from '@stores/tags';
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
    private tagsService: TagsService
  ) {}

  ngOnInit() {
    console.log(ProjectTestService);
    applyTransaction(() => {
      this.projectsService.get().subscribe();
      this.todosService.getTodos().subscribe();
      this.authorsService.get().subscribe();
      this.tagsService.get().subscribe();
    });
  }
}
