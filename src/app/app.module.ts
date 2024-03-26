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
import {MarkerPopupComponent} from './component/marker-popup/marker-popup.component';
import {LocationComponent} from './page/location/location.component';
import {MediaViewerComponent} from './component/media-viewer/media-viewer.component';
import {MediaGalleryComponent} from "./component/media-gallery/media-gallery.component";
import {LIGHTBOX_CONFIG, LightboxConfig} from "ng-gallery/lightbox";
import {MatTabsModule} from "@angular/material/tabs";
import {LocationCardComponent} from "./component/location-card/location-card.component";
import {CloudinaryModule} from "@cloudinary/ng";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewJourneyComponent} from "./page/journeys/new-journey/new-journey.component";
import {UpdateJourneyDetailsComponent} from "./page/workspace/update-journey-details/update-journey-details.component";
import {MatStep, MatStepContent, MatStepLabel, MatStepper} from "@angular/material/stepper";
import {SearchJourneyComponent} from "./page/journeys/search-journey/search-journey.component";
import {EditJourneyComponent} from "./page/journeys/edit-journey/edit-journey.component";
import {ViewJourneyComponent} from "./page/journeys/view-journey/view-journey.component";
import {NewJourneyBackupComponent} from "./page/workspace/new-journey/new-journey-backup.component";

@NgModule({
  declarations: [
    AppComponent,
    WorldMapComponent,
    SideNavbarComponent,
    HomeComponent,
    SearchJourneyComponent,
    NewJourneyComponent,
    ViewJourneyComponent,
    EditJourneyComponent,
    DashboardComponent,
    SearchComponent,
    GalleryComponent,
    WorkspaceComponent,
    PageHeaderComponent,
    MarkerPopupComponent,
    LocationComponent,
    MediaViewerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MediaGalleryComponent,
    MatTabsModule,
    LocationCardComponent,
    CloudinaryModule,
    FormsModule,
    UpdateJourneyDetailsComponent,
    MatStepper,
    MatStep,
    MatStepLabel,
    MatStepContent,
    ReactiveFormsModule,
    NewJourneyBackupComponent
  ],
  providers: [
    {
      provide: LIGHTBOX_CONFIG, useValue: {
        // panelClass:  'fullscreen',
        keyboardShortcuts: true
      } as LightboxConfig
    }
  ],
  exports: [
    PageHeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
