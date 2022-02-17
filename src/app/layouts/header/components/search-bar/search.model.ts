import { Project, DetailedStatus } from '@stores/projects';
import { Tag } from '@stores/tags';
import { Todo } from '@stores/todos';

export enum SearchResultType {
  Todo = 'todo',
  Status = 'status',
  Project = 'project',
  Tag = 'tag',
}

interface SearchResultWrap<T> {
  type: SearchResultType;
  src: T;
  text: string;
  html?: string;
  match?: RegExpMatchArray;
}

export type SearchResultTypeList = Todo | Project | Tag | DetailedStatus;

export type SearchResult = SearchResultWrap<SearchResultTypeList>;
