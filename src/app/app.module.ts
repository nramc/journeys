import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbDateAdapter} from "@ng-bootstrap/ng-bootstrap";
import {SideNavbarComponent} from './component/side-navbar/side-navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {LIGHTBOX_CONFIG, LightboxConfig} from "ng-gallery/lightbox";
import {JourneyDateAdapter} from "./utility/adopter/journey-date-adapter";

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LIGHTBOX_CONFIG, useValue: {
        // panelClass:  'fullscreen',
        keyboardShortcuts: true
      } as LightboxConfig
    },
    {provide: NgbDateAdapter, useClass: JourneyDateAdapter}
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
