import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authenticatedGuard} from "./guard/auth.guard";

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./page/home/home.component').then(m => m.HomeComponent),
    title: "Journey"
  },
  {
    path: 'journey',
    canActivate: [authenticatedGuard],
    canMatch: [authenticatedGuard],
    children: [
      {
        path: '', title: 'Journey',
        loadComponent: () => import('./page/journeys/search-journey/search-journey.component').then(m => m.SearchJourneyComponent),
        canActivate: [authenticatedGuard],
        canMatch: [authenticatedGuard]
      },
      {
        path: 'new',
        loadComponent: () => import('./page/journeys/new-journey/new-journey.component').then(m => m.NewJourneyComponent),
        title: 'New Journey',
        canActivate: [authenticatedGuard],
        canMatch: [authenticatedGuard]
      },
      {
        path: ':id/view',
        loadComponent: () => import('./page/journeys/view-journey/view-journey.component').then(m => m.ViewJourneyComponent),
        title: 'View Journey',
        canActivate: [authenticatedGuard],
        canMatch: [authenticatedGuard]
      },
      {
        path: ':id/edit',
        loadComponent: () => import('./page/journeys/edit-journey/edit-journey.component').then(m => m.EditJourneyComponent),
        title: 'Edit Journey',
        canActivate: [authenticatedGuard],
        canMatch: [authenticatedGuard]
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
