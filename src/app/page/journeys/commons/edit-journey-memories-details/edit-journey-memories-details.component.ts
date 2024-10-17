import {Component, computed, inject, model} from '@angular/core';
import {Journey} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {NotificationService} from "../../../../service/common/notification.service";
import {OperationMode} from "../../operation-mode";
import {MatChipsModule} from "@angular/material/chips";
import {FormsModule, NgForm} from "@angular/forms";
import {SUPPORTED_ICONS} from "../../../../config/icon-config";
import {NgIf, TitleCasePipe} from "@angular/common";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {DisplayMarkdownComponent} from "../../../../component/display-markdown-component/display-markdown.component";
import {MatIcon} from "@angular/material/icon";
import {NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {MatStepperModule} from "@angular/material/stepper";
import {TagsInputComponent} from "../../../../component/tags-input/tags-input.component";
import {NarrationComponent} from "../../../../component/narration/narration.component";
import {HasWriteAccessDirective} from "../../../../directive/has-write-access.directive";

@Component({
  selector: 'app-edit-journey-memories-details',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    TitleCasePipe,
    MatButtonToggleModule,
    DisplayMarkdownComponent,
    MatChipsModule,
    MatIcon,
    NgbInputDatepicker,
    MatStepperModule,
    TagsInputComponent,
    NarrationComponent,
    HasWriteAccessDirective
  ],
  templateUrl: './edit-journey-memories-details.component.html',
  styleUrl: './edit-journey-memories-details.component.scss'
})
export class EditJourneyMemoriesDetailsComponent {
  protected readonly SUPPORTED_ICONS = SUPPORTED_ICONS;
  protected readonly OperationMode = OperationMode;

  private readonly journeyService = inject(JourneyService);
  private readonly notificationService = inject(NotificationService);

  mode = model<OperationMode>(OperationMode.VIEW);
  isReadOnly = computed(() => this.mode() == OperationMode.VIEW);

  journey = model<Journey>(new Journey());

  onError(errorMessage: string, err: Error) {
    this.notificationService.showError(errorMessage);
    console.error(err);
  }

  onUpdateSuccess(data: Journey) {
    this.journey.set(data);
    this.mode.set(OperationMode.VIEW);
    this.notificationService.showSuccess('Journey details saved successfully.');
  }

  save(journeyForm: NgForm) {
    if (journeyForm.valid) {
      if (this.mode() == OperationMode.NEW) {
        this.createJourney();
      } else {
        this.updateJourney();
      }
    }
  }

  private createJourney() {
    this.journeyService.createJourney(this.journey())
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving data', err)
      })
  }

  private updateJourney() {
    this.journeyService.saveJourneyBasicDetails(this.journey())
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving data', err)
      });
  }

  enableEditMode() {
    this.mode.set(OperationMode.EDIT);
  }

}
