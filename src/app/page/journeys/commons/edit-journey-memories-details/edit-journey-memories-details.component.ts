import {Component, computed, inject, model, signal} from '@angular/core';
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

  private readonly journeyService = inject(JourneyService);
  private readonly notificationService = inject(NotificationService);

  mode = model<OperationMode>(OperationMode.VIEW); //todo change it to VIEW
  isEditable = computed(() => this.mode() === OperationMode.EDIT || this.mode() === OperationMode.NEW);
  isReadOnly = computed(() => this.mode() == OperationMode.VIEW);

  journey = model<Journey>(new Journey());

  memoriesForm = {
    name: signal<string>(this.journey().name),
    journeyDate: signal<string>(this.journey().journeyDate),
    icon: signal<string>(this.journey().icon),
    tags: signal<string[]>([]),
    description: signal<string>(this.journey().description)
  };

  onError(errorMessage: string, err: Error) {
    this.notificationService.showError(errorMessage);
    console.error(err);
  }

  onUpdateSuccess(data: Journey) {
    this.journey.set(data);
    this.notificationService.showSuccess('Journey details saved successfully.');
  }

  save(journeyForm: NgForm) {
    if (journeyForm.valid) {
      this.journey.update(data => ({
        ...data,
        name: this.memoriesForm.name(),
        journeyDate: this.memoriesForm.journeyDate(),
        icon: this.memoriesForm.icon(),
        tags: this.memoriesForm.tags(),
        description: this.memoriesForm.description()
      }));
      this.journeyService.createJourney(this.journey())
        .subscribe({
          next: data => this.onUpdateSuccess(data),
          error: err => this.onError('Unexpected error while saving data', err)
        });
    }
  }

  enableEditMode() {
    this.mode.set(OperationMode.EDIT);
  }
}
