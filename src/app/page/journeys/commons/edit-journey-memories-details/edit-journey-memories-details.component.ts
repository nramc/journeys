import {Component, computed, inject, model} from '@angular/core';
import {Journey} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {NotificationService} from "../../../../service/common/notification.service";
import {OperationMode} from "../../operation-mode";
import {MatChipsModule} from "@angular/material/chips";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatStepperModule} from "@angular/material/stepper";
import {TagsInputComponent} from "../../../../component/tags-input/tags-input.component";
import {NarrationComponent} from "../../../../component/narration/narration.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-journey-memories-details',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    MatButtonToggleModule,
    MatChipsModule,
    MatStepperModule,
    TagsInputComponent,
    NarrationComponent
  ],
  templateUrl: './edit-journey-memories-details.component.html',
  styles: []
})
export class EditJourneyMemoriesDetailsComponent {
  protected readonly OperationMode = OperationMode;

  private readonly journeyService = inject(JourneyService);
  private readonly notificationService = inject(NotificationService);
  private readonly router = inject(Router);

  mode = model<OperationMode>(OperationMode.VIEW);
  isReadOnly = computed(() => this.mode() == OperationMode.VIEW);

  journey = model<Journey>(new Journey());

  onError(errorMessage: string, err: Error) {
    this.notificationService.showError(errorMessage);
    console.error(err);
  }

  onUpdateSuccess(data: Journey) {
    this.journey.set(data);

    if (this.mode() === OperationMode.NEW) {
      this.router.navigate(['/journey', this.journey().id, 'edit'], {
        state: {
          mode: OperationMode.VIEW
        }
      }).then();
    }
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
