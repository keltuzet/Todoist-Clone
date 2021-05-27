import { Component, OnInit } from '@angular/core';
import { applyTransaction, transaction } from '@datorama/akita';
import { TodoView } from '@http/models';
import { AuthorsService } from '@stores/authors/authors.service';
import { ProjectsQuery } from '@stores/projects/projects.query';
import { ProjectsService } from '@stores/projects/projects.service';
import { TodosQuery, TodosService } from '@stores/todos';
import { map, tap } from 'rxjs/operators';
import { SortMenuComponent } from './components/sort-menu/sort-menu.component';

@Component({
  selector: 'app-todays',
  templateUrl: './todays.component.html',
  styleUrls: ['./todays.component.scss'],
})
export class TodaysComponent implements OnInit {
  today = new Date();
  sortMenu = SortMenuComponent;
  todays$ = this.todosQuery.selectTodays(this.today).pipe();
  overdue$ = this.todosQuery.selectOverdue().pipe(); //tap((v) => console.log(v))

  constructor(
    private projectsQuery: ProjectsQuery,
    private projectsService: ProjectsService,
    private todosService: TodosService,
    private todosQuery: TodosQuery,
    private authorsService: AuthorsService,
  ) {

  }

  ngOnInit(): void {
    applyTransaction(() => {
      this.projectsService.get().subscribe();
      this.todosService.getTodos().subscribe();
      this.authorsService.get().subscribe();
    });
  }
}
