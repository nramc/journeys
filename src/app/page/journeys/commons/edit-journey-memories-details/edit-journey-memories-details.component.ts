import {Component, inject, input, model, signal} from '@angular/core';
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
    TagsInputComponent
  ],
  templateUrl: './edit-journey-memories-details.component.html',
  styleUrl: './edit-journey-memories-details.component.scss'
})
export class EditJourneyMemoriesDetailsComponent {
  protected readonly SUPPORTED_ICONS = SUPPORTED_ICONS;

  private readonly journeyService = inject(JourneyService);
  private readonly notificationService = inject(NotificationService);

  mode = input<OperationMode>(OperationMode.VIEW);

  markdownStyle = signal<string>('Source')
  journey = model<Journey>(new Journey())

  onError(errorMessage: string, err: Error) {
    this.notificationService.showError(errorMessage);
    console.error(err);
  }

  onUpdateSuccess(_: Journey) {
    this.notificationService.showSuccess('Journey details saved successfully.');
  }

  save(journeyForm: NgForm) {
    console.debug('Submitted form data:', journeyForm);
    this.journeyService.saveJourneyBasicDetails(this.journey())
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving data', err)
      });

  }

}
