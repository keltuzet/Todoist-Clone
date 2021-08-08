import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SearchService {
  db: string[] = [
    'Missouri',
    'Michigan',
    'Boston',
    'Geneva',
    'Bari',
    'Friuli-Venezia Giulia',
    'Marche',
  ];

  constructor() {}

  search(str: string): Observable<string[]> {
    return of(this.db.filter(item => item.toLowerCase().includes(str.toLowerCase()))).pipe(
      delay(200),
    );
  }

  getRecentSearchResults(): Observable<string[]> {
    return of([
      'Todos',
      'Others',
      'Investigate',
      'Dolche',
    ]);
  }
}
