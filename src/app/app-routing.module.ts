import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./page/home/home.component').then(m => m.HomeComponent),
    title: "Journey"
  },
  {
    path: 'journeys',
    loadComponent: () => import('./page/journeys/search-journey/search-journey.component').then(m => m.SearchJourneyComponent),
    title: 'Journey'
  },
  {
    path: 'journey', children: [
      {
        path: 'new',
        loadComponent: () => import('./page/journeys/new-journey/new-journey.component').then(m => m.NewJourneyComponent),
        title: 'New Journey'
      },
      {
        path: ':id/view',
        loadComponent: () => import('./page/journeys/view-journey/view-journey.component').then(m => m.ViewJourneyComponent),
        title: 'View Journey'
      },
      {
        path: ':id/edit',
        loadComponent: () => import('./page/journeys/edit-journey/edit-journey.component').then(m => m.EditJourneyComponent),
        title: 'Edit Journey'
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
