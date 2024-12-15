import {Component, computed, signal} from '@angular/core';
import {MatStepperModule} from "@angular/material/stepper";
import {NgIf} from "@angular/common";
import {Journey} from "../../../model/core/journey.model";
import {
  EditJourneyMemoriesDetailsComponent
} from "../commons/edit-journey-memories-details/edit-journey-memories-details.component";
import {OperationMode} from "../operation-mode";
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {NEW_JOURNEY_PAGE_INFO} from "../../../model/page.info.model";

@Component({
    selector: 'app-create-journey',
    imports: [
        MatStepperModule,
        NgIf,
        EditJourneyMemoriesDetailsComponent,
        PageHeaderComponent
    ],
    templateUrl: './create-journey.component.html',
    styles: []
})
export class CreateJourneyComponent {
  protected readonly OperationMode = OperationMode;

  journey = signal<Journey>(new Journey());

  isBasicDetailsAvailable = computed<boolean>(() =>
    this.journey().id !== undefined && this.journey().id !== '' && this.journey().id !== null)


  protected readonly NEW_JOURNEY_PAGE_INFO = NEW_JOURNEY_PAGE_INFO;
}
