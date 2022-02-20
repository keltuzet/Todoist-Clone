import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TooltipModule } from 'todoist-tooltip';
import { MenuModule } from 'todoist-menu';
import { NgxSpinnerModule } from 'ngx-spinner';

import { SidebarModule } from '@features/sidebar';
import { ExpansionPanelModule } from '@features/expansion-panel';
import { RadioButtonModule } from '@features/radio-button';
import { ButtonModule } from '@features/button';
import { ProjectActionsMenuModule, TagActionsModule } from '@shared/components';
import { SvgIconTextModule } from '@shared/directives';
import { ProjectIconModule, TakeModule } from '@shared/pipes';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './header/components/search-bar/search-bar.component';
import { HeaderExtraToolbarComponent } from './header/components/header-extra-toolbar/header-extra-toolbar.component';
import { HeaderMainToolbarComponent } from './header/components/header-main-toolbar/header-main-toolbar.component';
import { QuickCreateTodoDialogComponent } from './header/components/quick-create-todo-dialog/quick-create-todo-dialog.component';
import { ProductivityMenuComponent } from './header/components/productivity-menu/productivity-menu.component';
import { HelpMenuComponent } from './header/components/help-menu/help-menu.component';
import { SearchResultComponent } from './header/components/search-result/search-result.component';
import { SearchResultListComponent } from './header/components/search-result-list/search-result-list.component';
import { RecentSearchListComponent } from './header/components/recent-search-list/recent-search-list.component';
import { RecentSearchResultListComponent } from './header/components/recent-search-result-list/recent-search-result-list.component';
import { NavComponent } from './nav/nav.component';
import { MainListComponent } from './nav/components/nav-main-list/nav-main-list.component';
import { NavProjectListComponent } from './nav/components/nav-project-list/nav-project-list.component';
import { NavListItemComponent } from './nav/components/nav-list-item/nav-list-item.component';
import { NavFavoritesListComponent } from './nav/components/nav-favorites-list/nav-favorites-list.component';
import { NavTagListComponent } from './nav/components/nav-tag-list/nav-tag-list.component';
import { NavFilterListComponent } from './nav/components/nav-filter-list/nav-filter-list.component';
import { NavTagMenuComponent } from './nav/components/nav-tag-menu/nav-tag-menu.component';
import { NavListComponent } from './nav/components/nav-list/nav-list.component';
import { NgxLetDirectiveModule } from 'ngx-let-directive';
import { PriorityActionsModule, SettingsMenuModule } from '@shared/components';

@NgModule({
  declarations: [
    PageLayoutComponent,
    HeaderComponent,
    SearchBarComponent,
    HeaderExtraToolbarComponent,
    HeaderMainToolbarComponent,
    NavComponent,
    MainListComponent,
    NavProjectListComponent,
    NavListItemComponent,
    NavFavoritesListComponent,
    NavTagListComponent,
    NavFilterListComponent,
    NavTagMenuComponent,
    SearchResultComponent,
    SearchResultListComponent,
    RecentSearchListComponent,
    RecentSearchResultListComponent,
    NavListComponent,
    QuickCreateTodoDialogComponent,
    ProductivityMenuComponent,
    HelpMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    TooltipModule,
    SidebarModule,
    SvgIconTextModule,
    RouterModule,
    ExpansionPanelModule,
    DragDropModule,
    MenuModule,
    ProjectIconModule,
    OverlayModule,
    RadioButtonModule,
    TakeModule,
    NgxSpinnerModule,
    ButtonModule,
    ProjectActionsMenuModule,
    NgxLetDirectiveModule,
    PriorityActionsModule,
    SettingsMenuModule,
    TagActionsModule,
  ],
})
export class PageLayoutModule {}
