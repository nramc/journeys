import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbDateAdapter, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SideNavbarComponent} from './component/side-navbar/side-navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HomeComponent} from './page/home/home.component';
import {GalleryComponent} from './page/gallery/gallery.component';
import {HttpClientModule} from "@angular/common/http";
import {MediaGalleryComponent} from "./component/media-gallery/media-gallery.component";
import {LIGHTBOX_CONFIG, LightboxConfig} from "ng-gallery/lightbox";
import {MatTabsModule} from "@angular/material/tabs";
import {CloudinaryModule} from "@cloudinary/ng";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatStep,
  MatStepContent,
  MatStepLabel,
  MatStepper,
  MatStepperIcon,
  MatStepperNext
} from "@angular/material/stepper";
import {SearchJourneyComponent} from "./page/journeys/search-journey/search-journey.component";
import {EditJourneyComponent} from "./page/journeys/edit-journey/edit-journey.component";
import {MatPaginator} from "@angular/material/paginator";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {JourneysListComponent} from "./page/journeys/search-journey/journeys-list/journeys-list.component";
import {MatRipple} from "@angular/material/core";
import {
  JourneySearchCriteriaComponent
} from "./page/journeys/search-journey/journey-search-criteria/journey-search-criteria.component";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatFormField, MatHint, MatSuffix} from "@angular/material/form-field";
import {JourneyDateAdapter} from "./utility/adopter/journey-date-adapter";
import {MatChip, MatChipGrid, MatChipInput, MatChipOption, MatChipRemove, MatChipRow} from "@angular/material/chips";
import {
  EditJourneyBasicDetailsComponent
} from "./page/journeys/edit-journey/edit-journey-basic-details/edit-journey-basic-details.component";
import {FeedbackMessageComponent} from "./component/feedback-message/feedback-message.component";
import {
  EditJourneyGeoDetailsComponent
} from "./page/journeys/edit-journey/edit-journey-geo-details/edit-journey-geo-details.component";
import {
  EditJourneyImagesDetailsComponent
} from "./page/journeys/edit-journey/edit-journey-image-details/edit-journey-images-details.component";
import {MatBadge} from "@angular/material/badge";
import {
  EditJourneyVideosDetailsComponent
} from "./page/journeys/edit-journey/edit-journey-video-details/edit-journey-videos-details.component";
import {PageHeaderComponent} from "./component/page-header/page-header.component";
import {WorldMapComponent} from "./component/world-map/world-map.component";
import {
  EditJourneyPublishDetailsComponent
} from "./page/journeys/edit-journey/edit-journey-publish-details/edit-journey-publish-details.component";

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    HomeComponent,
    SearchJourneyComponent,
    EditJourneyComponent,
    GalleryComponent,
    JourneysListComponent,
    JourneySearchCriteriaComponent,
    EditJourneyBasicDetailsComponent,
    EditJourneyGeoDetailsComponent,
    EditJourneyImagesDetailsComponent
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
    CloudinaryModule,
    FormsModule,
    MatStepper,
    MatStep,
    MatStepLabel,
    MatStepContent,
    ReactiveFormsModule,
    MatPaginator,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatProgressSpinnerModule,
    MatTable,
    MatSort,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatSortHeader,
    MatRipple,
    MatDatepickerInput,
    MatHint,
    MatSuffix,
    MatDatepickerToggle,
    MatDatepicker,
    MatChipGrid,
    MatChipRow,
    MatChipInput,
    MatFormField,
    MatChipRemove,
    MatChip,
    MatChipOption,
    MatStepperNext,
    MatStepperIcon,
    FeedbackMessageComponent,
    MatBadge,
    EditJourneyVideosDetailsComponent,
    PageHeaderComponent,
    WorldMapComponent,
    EditJourneyPublishDetailsComponent
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
