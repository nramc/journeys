import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldMapComponent } from './component/world-map/world-map.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { SideNavbarComponent } from './component/side-navbar/side-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldMapComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
