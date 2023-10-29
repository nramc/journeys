import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WorldMapComponent} from './component/world-map/world-map.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SideNavbarComponent} from './component/side-navbar/side-navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HomeComponent} from './page/home/home.component';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {SearchComponent} from './page/search/search.component';
import {GalleryComponent} from './page/gallery/gallery.component';
import {WorkspaceComponent} from './page/workspace/workspace.component';
import {PageHeaderComponent} from './component/page-header/page-header.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    WorldMapComponent,
    SideNavbarComponent,
    HomeComponent,
    DashboardComponent,
    SearchComponent,
    GalleryComponent,
    WorkspaceComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
