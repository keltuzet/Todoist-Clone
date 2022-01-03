import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DisplayTodosMenuComponent } from '@shared/components';
import { Todo } from '@shared/models';
import { TagsQuery } from '@stores/tags';
import { TodosQuery } from '@stores/todos';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

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

  constructor(private tagsQuery: TagsQuery, private todosQuery: TodosQuery) {}

  ngOnInit(): void {
    this.todos$ = this.tag$.pipe(switchMap((tag) => this.todosQuery.selectByTag(tag)));
  }

  trackBy(index: number, item: Todo): number {
    return item.id;
  }

  termFormatFn = (todo: Todo) => `d MMMM${todo.hasEndTime ? ' HH:mm' : ''}`;

  openDisplayMenu(): void {

  }
}
