import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DisplayTodosMenuComponent } from '@shared/components';
import { GroupTodosBy, Todo } from '@shared/models';
import { TagsQuery, TagsService, TagsStore } from '@stores/tags';
import { TagsUiQuery } from '@stores/tags-ui/tags-ui.query';
import { TagsUiStore } from '@stores/tags-ui/tags-ui.store';
import { TodosQuery } from '@stores/todos';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 't-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent implements OnInit {
  tag$ = this.tagsQuery.selectSelectedTag();
  todos$: Observable<Todo[]>;
  menu = DisplayTodosMenuComponent;

  constructor(
    private tagsQuery: TagsQuery,
    private tagsService: TagsService,
    private todosQuery: TodosQuery,
  ) {}

  ngOnInit(): void {
    this.initTodosDisplaying();
    this.todos$ = this.tag$.pipe(switchMap((tag) => this.todosQuery.selectByTag(tag)));
  }

  initTodosDisplaying(): void {
    this.tagsQuery
      .selectSelectedTagUIState()
      .subscribe((state) => {
        if (state) return;
        this.tagsService.setDefaultUIStateOfSelected();
      });
  }

  trackBy(index: number, item: Todo): number {
    return item.id;
  }

  termFormatFn = (todo: Todo) => `d MMMM${todo.hasEndTime ? ' HH:mm' : ''}`;

  openDisplayMenu(): void {}
}
