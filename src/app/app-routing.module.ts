import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {SearchComponent} from "./page/search/search.component";
import {GalleryComponent} from "./page/gallery/gallery.component";
import {LocationComponent} from "./page/location/location.component";
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
  {path: 'search', component: SearchComponent, title: "Search"},
  {path: 'gallery', component: GalleryComponent, title: "Gallery"},
  {path: 'place/:id', component: LocationComponent, title: "Location"},
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
