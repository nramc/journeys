import {
  ApplicationConfig,
  ErrorHandler,
  importProvidersFrom,
  provideExperimentalZonelessChangeDetection
} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NgOptimizedImage} from "@angular/common";
import {MarkdownModule} from "ngx-markdown";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {LIGHTBOX_CONFIG, LightboxConfig} from "ng-gallery/lightbox";
import {CustomErrorHandler} from "./utility/handler/error.handler";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions} from "@angular/router";
import {ROUTES} from "./app.routes";
import {loadingInterceptor} from "./utility/handler/loading.interceptor";


export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    importProvidersFrom(BrowserModule, NgOptimizedImage, MarkdownModule.forRoot(), MatMenuModule, MatIconModule),
    {
      provide: LIGHTBOX_CONFIG, useValue: {
        panelClass: 'fullscreen',
        keyboardShortcuts: true
      } as LightboxConfig
    },
    {provide: ErrorHandler, useClass: CustomErrorHandler},
    provideHttpClient(withInterceptors([loadingInterceptor])),
    provideAnimations(),
    provideRouter(ROUTES,
      withComponentInputBinding(),
      withViewTransitions(),
      withInMemoryScrolling({scrollPositionRestoration: "enabled", anchorScrolling: "enabled"}))
  ]
}
