import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { EmojiGroup } from '@http/models';
import { environment } from 'environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmojisService {
  private readonly allStorageKey = 'emojis';
  private readonly recentStorageKey = 'recent-emojis';
  private readonly maxCountOfRecent = 16;

  constructor(private http: HttpClient) {}

  getAll(): Observable<EmojiGroup[]> {
    const copyFromLocalStorage: EmojiGroup[] = JSON.parse(localStorage.getItem(this.allStorageKey));
    if (copyFromLocalStorage) return of(copyFromLocalStorage);

    return this.http
      .get<EmojiGroup[]>(`${environment.baseApi}/emojis.json`)
      .pipe(tap(groups => localStorage.setItem(this.allStorageKey, JSON.stringify(groups))));
  }

  getRecent(): EmojiGroup {
    const recent: EmojiGroup = JSON.parse(localStorage.getItem(this.recentStorageKey));
    if (!recent) return this.initRecentStorage();

    return recent;
  }

  markAsRecent(emoji: string): void {
    const recent = this.getRecent();
    if (recent.emojis.length >= this.maxCountOfRecent) recent.emojis.shift();
    recent.emojis.push(emoji);
    this.saveToRecent(recent);
  }

  private initRecentStorage(): EmojiGroup {
    const group: EmojiGroup = {
      title: 'Недавние',
      emojis: [],
    };
    this.saveToRecent(group);
    return group;
  }

  private saveToRecent(group: EmojiGroup): void {
    localStorage.setItem(this.recentStorageKey, JSON.stringify(group));
  }
}
