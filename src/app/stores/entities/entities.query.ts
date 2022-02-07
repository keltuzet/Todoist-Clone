import { Injectable } from '@angular/core';
import { combineQueries } from '@datorama/akita';
import { ProjectsQuery } from '@stores/projects';
import { TagsQuery } from '@stores/tags';
import { TodosQuery } from '@stores/todos';

@Injectable({
  providedIn: 'root',
})
export class EntitiesQuery {
  readonly entities$ = combineQueries([
    this.projectsQuery.all$,
    this.tagsQuery.all$,
    this.todosQuery.all$,
    this.projectsQuery.detailedStatuses$,
  ]);

  constructor(private projectsQuery: ProjectsQuery, private tagsQuery: TagsQuery, private todosQuery: TodosQuery) {}
}
