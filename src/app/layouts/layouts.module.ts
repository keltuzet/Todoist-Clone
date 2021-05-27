import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './header/components/search-bar/search-bar.component';
import { HeaderExtraToolbarComponent } from './header/components/header-extra-toolbar/header-extra-toolbar.component';
import { HeaderMainToolbarComponent } from './header/components/header-main-toolbar/header-main-toolbar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TooltipModule } from '@features/tooltip';
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
import { MenuModule } from '@features/menu';

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
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularSvgIconModule,
    TooltipModule,
    SidebarModule,
    SvgIconTextModule,
    RouterModule,
    ExpansionPanelModule,
    DragDropModule,
    MenuModule,
  ],
})
export class PageLayoutModule {}