import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {SearchJourneyComponent} from "./page/journeys/search-journey/search-journey.component";
import {NewJourneyComponent} from "./page/journeys/new-journey/new-journey.component";
import {ViewJourneyComponent} from "./page/journeys/view-journey/view-journey.component";
import {EditJourneyComponent} from "./page/journeys/edit-journey/edit-journey.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: "Journey"},

  {path: 'journeys', component: SearchJourneyComponent, title: 'Journey'},
  {
    path: 'journey', children: [
      {path: 'new', component: NewJourneyComponent, title: 'New Journey'},
      {path: ':id/view', component: ViewJourneyComponent, title: 'View Journey'},
      {path: ':id/edit', component: EditJourneyComponent, title: 'Edit Journey'}
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
    enableViewTransitions: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
