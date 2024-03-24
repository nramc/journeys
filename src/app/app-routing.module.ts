import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {SearchComponent} from "./page/search/search.component";
import {GalleryComponent} from "./page/gallery/gallery.component";
import {WorkspaceComponent} from "./page/workspace/workspace.component";
import {LocationComponent} from "./page/location/location.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: "Journey"},
  {path: 'dashboard', component: DashboardComponent, title: "Dashboard"},
  {path: 'search', component: SearchComponent, title: "Search"},
  {path: 'gallery', component: GalleryComponent, title: "Gallery"},
  {path: 'place/:id', component: LocationComponent, title: "Location"},
  {path: 'workspace', component: WorkspaceComponent, title: "Workspace"},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
