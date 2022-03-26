import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Themes } from '../../theme/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private activeThemeKey = 'active-theme';
  private initialTheme = Themes.Primary;
  private themeLinkID = 'app-theme';
  private activeTheme$ = new BehaviorSubject<Themes>(null);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  init(): void {
    const currentTheme = this.getActiveThemeFromStorage() || this.initialTheme;
    this.setActiveTheme(currentTheme);
  }

  getActiveTheme(): Observable<Themes> {
    return this.activeTheme$.asObservable();
  }

  setActiveTheme(theme: Themes): void {
    localStorage.setItem(this.activeThemeKey, theme);
    this.loadTheme(theme);
    this.activeTheme$.next(theme);
  }

  private loadTheme(theme: Themes): void {
    const head = this.document.getElementsByTagName('head')[0];
    const themeLink = this.document.getElementById(this.themeLinkID) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = this.getThemeFileUrl(theme);
    } else {
      const style = this.document.createElement('link');
      style.id = this.themeLinkID;
      style.rel = 'stylesheet';
      style.href = this.getThemeFileUrl(theme);
      head.appendChild(style);
    }
  }

  private getThemeFileUrl(theme: Themes): string {
    return `${theme}-theme.css`;
  }

  private getActiveThemeFromStorage(): Themes {
    return localStorage.getItem(this.activeThemeKey) as Themes;
  }
}
