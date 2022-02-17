import { Injectable } from '@angular/core';
import { Status } from '@stores/projects';
import { EntitiesQuery } from '@stores/entities/entities.query';
import { TodosQuery } from '@stores/todos';
import { Observable, of } from 'rxjs';
import { delay, map, switchMap, take, tap } from 'rxjs/operators';
import escapeStringRegexp from 'escape-string-regexp';
import { SearchResult, SearchResultType, SearchResultTypeList } from './search.model';
import { SearchStore } from './search.state';
import { initialLoadState } from '@shared/models/load-state.model';

@Injectable({ providedIn: 'root' })
export class SearchService {
  db: string[] = ['Missouri', 'Michigan', 'Boston', 'Geneva', 'Bari', 'Friuli-Venezia Giulia', 'Marche'];
  specifiers = ['@', '/', '#', '*'];

  constructor(private entitiesQuery: EntitiesQuery, private searchStore: SearchStore) {}

  search(text: string): Observable<SearchResult[]> {
    return this.entitiesQuery.entities$.pipe(
      take(1),
      tap(() => this.searchStore.update({ searchLoadState: { ...initialLoadState, processing: true } })),
      map(([projects, tags, todos, statuses]) => {
        const firstLetter = text[0];
        const hasSpecifier = this.specifiers.includes(firstLetter);
        let results: SearchResult[];

        if (hasSpecifier) {
          text = text.slice(1);
        }

        switch (firstLetter) {
          case '@':
            results = this.filter(tags, text, SearchResultType.Tag);
            break;
          case '/':
            results = this.filter(statuses, text, SearchResultType.Status);
            break;
          case '#':
            results = this.filter(projects, text, SearchResultType.Project);
            break;
          case '*':
            results = this.filter(todos, text, SearchResultType.Todo);
            break;
          default:
            results = [
              ...this.filter(projects, text, SearchResultType.Project),
              ...this.filter(tags, text, SearchResultType.Tag),
              ...this.filter(statuses, text, SearchResultType.Status),
              ...this.filter(todos, text, SearchResultType.Todo),
            ];
        }

        return results;
      }),
      tap(
        (searchResults) =>
          this.searchStore.update({
            searchResults,
            searchLoadState: { ...initialLoadState, completed: true },
          }),
        () => this.searchStore.update({ searchLoadState: { ...initialLoadState, failed: true } }),
      ),
    );
  }

  convertToSearchResult(
    items: SearchResultTypeList[],
    type: SearchResultType,
    pathToText: string = 'title',
  ): SearchResult[] {
    return items.map((item) => ({ src: item, text: item[pathToText], type }));
  }

  filter(
    items: SearchResultTypeList[],
    text: string,
    type: SearchResultType,
    pathToText: string = 'title',
  ): SearchResult[] {
    const filtered: SearchResult[] = [];
    items.forEach((item) => {
      const match = this.match(item[pathToText], text);
      if (match) {
        filtered.push({
          html: this.toHTML(match),
          src: item,
          text: item[pathToText],
          type,
          match,
        });
      }
    });
    return filtered;
  }

  toHTML(match: RegExpMatchArray): string {
    const matchText = match[0];
    const matchIndex = match.index;
    const text = match.input;
    return `${text.slice(0, matchIndex)}<b>${matchText}</b>${text.slice(matchIndex + matchText.length)}`;
  }

  includes(str: string, substr: string): boolean {
    this.match(str, substr);
    return str.toLocaleLowerCase().includes(substr);
  }

  match(str: string, substr: string): RegExpMatchArray | null {
    return str.match(new RegExp(escapeStringRegexp(substr), 'i'));
  }

  getRecentSearchResults(): Observable<string[]> {
    return of(['Todos', 'Others', 'Investigate', 'Dolche']);
  }
}
