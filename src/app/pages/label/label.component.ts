import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DisplayTodosMenuComponent } from '@shared/components';
import { Todo } from '@stores/todos';
import { trackByIdentity } from '@shared/utils';
import { TagsQuery, TagsService } from '@stores/tags';
import { TodosQuery } from '@stores/todos';

@Component({
  selector: 't-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent implements OnInit {
  readonly tag$ = this.tagsQuery.selectRouteTag();
  readonly menu = DisplayTodosMenuComponent;
  readonly trackById = trackByIdentity<Todo>('id');
  readonly todos$ = this.getTodos();

  readonly termFormatFn = (todo: Todo) => `d MMMM${todo.hasEndTime ? ' HH:mm' : ''}`;

  constructor(private tagsQuery: TagsQuery, private tagsService: TagsService, private todosQuery: TodosQuery) {}

  ngOnInit(): void {
    this.initTodosDisplaying();
  }

  private initTodosDisplaying(): void {
    this.tagsQuery.selectRouteTagUIState().subscribe(state => {
      if (state) return;
      this.tagsService.setDefaultUIStateOfRouteTag();
    });
  }

  private getTodos(): Observable<Todo[]> {
    return this.tag$.pipe(switchMap(tag => this.todosQuery.selectByTag(tag)));
  }
}
