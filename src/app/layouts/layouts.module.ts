import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './header/components/search-bar/search-bar.component';
import { HeaderExtraToolbarComponent } from './header/components/header-extra-toolbar/header-extra-toolbar.component';
import { HeaderMainToolbarComponent } from './header/components/header-main-toolbar/header-main-toolbar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TooltipModule } from 'todoist-tooltip';
import { NavComponent } from './nav/nav.component';
import { SidebarModule } from '@features/sidebar/sidebar.module';
import { MainListComponent } from './nav/components/nav-main-list/nav-main-list.component';
import { SvgIconTextModule } from '@shared/directives';
import { ExpansionPanelModule } from '@features/expansion-panel';
import { NavProjectListComponent } from './nav/components/nav-project-list/nav-project-list.component';
import { NavListItemComponent } from './nav/components/nav-list-item/nav-list-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NavFavoritesListComponent } from './nav/components/nav-favorites-list/nav-favorites-list.component';
import { NavTagListComponent } from './nav/components/nav-tag-list/nav-tag-list.component';
import { NavFilterListComponent } from './nav/components/nav-filter-list/nav-filter-list.component';
import { NavTagMenuComponent } from './nav/components/nav-tag-menu/nav-tag-menu.component';

import { ProjectIconModule } from '@shared/pipes/project-icon/project-icon.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from '@features/radio-button';
import { SearchResultComponent } from './header/components/search-result/search-result.component';
import { SearchResultListComponent } from './header/components/search-result-list/search-result-list.component';
import { RecentSearchListComponent } from './header/components/recent-search-list/recent-search-list.component';
import { RecentSearchResultListComponent } from './header/components/recent-search-result-list/recent-search-result-list.component';
import { TakeModule } from '@shared/pipes/take/take.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavListComponent } from './nav/components/nav-list/nav-list.component';
import { QuickAddTodoDialogComponent } from './header/components/quick-add-todo-dialog/quick-add-todo-dialog.component';
import { ProductivityMenuComponent } from './header/components/productivity-menu/productivity-menu.component';
import { ButtonModule } from '@features/button/button.module';
import { HelpMenuComponent } from './header/components/help-menu/help-menu.component';
import { MenuModule } from 'todoist-menu';

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
    QuickAddTodoDialogComponent,
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
  ],
})
export class PageLayoutModule {}
