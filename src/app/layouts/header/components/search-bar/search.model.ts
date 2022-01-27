import { Todo, Project, TodoStatusDetailed, TodoTag } from '@shared/models';

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

export type SearchResultTypeList = Todo | Project | TodoTag | TodoStatusDetailed;

export type SearchResult = SearchResultWrap<SearchResultTypeList>;
