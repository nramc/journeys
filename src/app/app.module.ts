import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbDateAdapter} from "@ng-bootstrap/ng-bootstrap";
import {SideNavbarComponent} from './component/side-navbar/side-navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {LIGHTBOX_CONFIG, LightboxConfig} from "ng-gallery/lightbox";
import {JourneyDateAdapter} from "./utility/adopter/journey-date-adapter";
import {CustomErrorHandler} from "./utility/handler/error.handler";
import {NgOptimizedImage} from "@angular/common";
import {MarkdownModule} from "ngx-markdown";
import {MatMenu, MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent
  ],
  exports: [],
  bootstrap: [AppComponent], imports: [BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    MarkdownModule.forRoot(),
    MatMenuModule,
    MatIconModule
  ], providers: [
    {
      provide: LIGHTBOX_CONFIG, useValue: {
        panelClass: 'fullscreen',
        keyboardShortcuts: true
      } as LightboxConfig
    },
    {provide: NgbDateAdapter, useClass: JourneyDateAdapter},
    {provide: ErrorHandler, useClass: CustomErrorHandler},
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule {
}
