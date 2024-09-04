/// <reference types="@angular/localize" />

import {AppComponent} from './app/app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MarkdownModule} from 'ngx-markdown';
import {NgOptimizedImage} from '@angular/common';
import {provideAnimations} from '@angular/platform-browser/animations';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {CustomErrorHandler} from './app/utility/handler/error.handler';
import {ErrorHandler, importProvidersFrom} from '@angular/core';
import {JourneyDateAdapter} from './app/utility/adopter/journey-date-adapter';
import {NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';
import {LIGHTBOX_CONFIG, LightboxConfig} from 'ng-gallery/lightbox';
import {provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions} from "@angular/router";
import {ROUTES} from "./app/app.routes";


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, NgOptimizedImage, MarkdownModule.forRoot(), MatMenuModule, MatIconModule),
    {
      provide: LIGHTBOX_CONFIG, useValue: {
        panelClass: 'fullscreen',
        keyboardShortcuts: true
      } as LightboxConfig
    },
    {provide: NgbDateAdapter, useClass: JourneyDateAdapter},
    {provide: ErrorHandler, useClass: CustomErrorHandler},
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter(ROUTES,
      withComponentInputBinding(),
      withViewTransitions(),
      withInMemoryScrolling({scrollPositionRestoration: "enabled", anchorScrolling: "enabled"}))
  ]
})
  .catch(err => console.error(err));
