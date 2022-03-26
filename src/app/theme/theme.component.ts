import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ThemesService } from '@shared/services/themes.service';
import { Themes } from './theme.model';
import { THEME_LIST } from './themes-list.const';

@Component({
  selector: 't-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeComponent implements OnInit {
  themes = THEME_LIST;
  readonly activeTheme$ = this.themesService.getActiveTheme();
  transparent = 'transparent';

  constructor(private themesService: ThemesService) {}

  ngOnInit(): void {}

  selectTheme(theme: Themes): void {
    this.themesService.setActiveTheme(theme);
  }
}
