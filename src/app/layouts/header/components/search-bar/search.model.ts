import { Todo, Project, TodoDetailedStatus, TodoTag } from '@shared/models';

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

export type SearchResultTypeList = Todo | Project | TodoTag | TodoDetailedStatus;

export type SearchResult = SearchResultWrap<SearchResultTypeList>;
