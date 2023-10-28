import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {SearchComponent} from "./page/search/search.component";
import {GalleryComponent} from "./page/gallery/gallery.component";
import {WorkspaceComponent} from "./page/workspace/workspace.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'search', component: SearchComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'workspace', component: WorkspaceComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
