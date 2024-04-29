import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  canActivateWhenAuthenticatedGuard,
  canActivateWhenHasWriteAccessGuard,
  canMatchWhenAuthenticatedGuard, canMatchWhenHasWriteAccessGuard
} from "./guard/auth.guard";

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./page/home/home.component').then(m => m.HomeComponent),
    title: "Journey"
  },
  {
    path: 'login',
    loadComponent: () => import('./page/auth/login/login.component').then(m => m.LoginComponent),
    title: 'Login'
  },
  {
    path: 'journey',
    canActivate: [canActivateWhenAuthenticatedGuard],
    canMatch: [canMatchWhenAuthenticatedGuard],
    children: [
      {
        path: '', title: 'Journey',
        loadComponent: () => import('./page/journeys/search-journey/search-journey.component').then(m => m.SearchJourneyComponent),
        canActivate: [canActivateWhenAuthenticatedGuard],
        canMatch: [canMatchWhenAuthenticatedGuard]
      },
      {
        path: 'new',
        loadComponent: () => import('./page/journeys/new-journey/new-journey.component').then(m => m.NewJourneyComponent),
        title: 'New Journey',
        canActivate: [canActivateWhenAuthenticatedGuard, canActivateWhenHasWriteAccessGuard],
        canMatch: [canMatchWhenAuthenticatedGuard, canMatchWhenHasWriteAccessGuard]
      },
      {
        path: ':id/view',
        loadComponent: () => import('./page/journeys/view-journey/view-journey.component').then(m => m.ViewJourneyComponent),
        title: 'View Journey',
        canActivate: [canActivateWhenAuthenticatedGuard],
        canMatch: [canMatchWhenAuthenticatedGuard]
      },
      {
        path: ':id/edit',
        loadComponent: () => import('./page/journeys/edit-journey/edit-journey.component').then(m => m.EditJourneyComponent),
        title: 'Edit Journey',
        canActivate: [canActivateWhenAuthenticatedGuard, canActivateWhenHasWriteAccessGuard],
        canMatch: [canMatchWhenAuthenticatedGuard, canMatchWhenHasWriteAccessGuard]
      }
    ]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./page/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: "Dashboard"
  },
  {
    path: 'gallery',
    loadComponent: () => import('./page/gallery/gallery.component').then(m => m.GalleryComponent),
    title: "Gallery"
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableViewTransitions: true,
    bindToComponentInputs: true,
    scrollPositionRestoration: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
