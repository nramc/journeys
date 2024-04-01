import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WorldMapComponent} from './component/world-map/world-map.component';
import {NgbDateAdapter, NgbModule} from "@ng-bootstrap/ng-bootstrap";
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
import {ViewJourneyComponent} from "./page/journeys/view-journey/view-journey.component";
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
    MediaViewerComponent,
    JourneysListComponent,
    JourneySearchCriteriaComponent,
    EditJourneyBasicDetailsComponent
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
        FeedbackMessageComponent
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
  exports: [
    PageHeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
