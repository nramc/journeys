import {ApplicationConfig, ErrorHandler, importProvidersFrom} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NgOptimizedImage} from "@angular/common";
import {MarkdownModule} from "ngx-markdown";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {LIGHTBOX_CONFIG, LightboxConfig} from "ng-gallery/lightbox";
import {NgbDateAdapter} from "@ng-bootstrap/ng-bootstrap";
import {JourneyDateAdapter} from "./utility/adopter/journey-date-adapter";
import {CustomErrorHandler} from "./utility/handler/error.handler";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions} from "@angular/router";
import {ROUTES} from "./app.routes";


export const appConfig: ApplicationConfig = {
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
}
