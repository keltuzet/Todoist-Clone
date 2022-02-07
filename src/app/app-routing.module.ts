import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_ROUTES } from '@shared/const';
import { ProjectsResolver, TagsResolver, TodosResolver, AuthorsResolver } from '@shared/resolvers';
import { DevComponent } from '@pages/dev/dev.component';
import { IconCatalogPermissionGuard } from '@pages/icon-catalog/icon-catalog-permission.guard';
import { PageLayoutComponent } from './layouts';

const routes: Routes = [
  {
    path: APP_ROUTES.dev,
    component: DevComponent,
  },
  {
    path: APP_ROUTES.root,
    component: PageLayoutComponent,
    resolve: {
      tags: TagsResolver,
      projects: ProjectsResolver,
      todos: TodosResolver,
      authors: AuthorsResolver,
    },
    children: [
      {
        path: APP_ROUTES.todays,
        loadChildren: () => import('./pages/todays/todays.module').then(m => m.TodaysModule),
      },
      {
        path: APP_ROUTES.upcoming,
        loadChildren: () => import('./pages/upcoming/upcoming.module').then(m => m.UpcomingModule),
      },
      {
        path: APP_ROUTES.project,
        loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule),
      },
      {
        path: APP_ROUTES.label,
        loadChildren: () => import('./pages/label/label.module').then(m => m.LabelModule),
      },
      {
        path: APP_ROUTES.iconCatalog,
        loadChildren: () => import('./pages/icon-catalog/icon-catalog.module').then(m => m.IconCatalogModule),
        canActivate: [IconCatalogPermissionGuard],
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: APP_ROUTES.todays,
      },
    ],
  },
  {
    path: 'icon-catalog',
    loadChildren: () => import('./pages/icon-catalog/icon-catalog.module').then(m => m.IconCatalogModule),
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.root,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
