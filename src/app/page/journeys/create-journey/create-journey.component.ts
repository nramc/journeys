import {Component, computed, signal} from '@angular/core';
import {MatStepperModule} from "@angular/material/stepper";
import {NgIf} from "@angular/common";
import {Journey} from "../../../model/core/journey.model";
import {
  EditJourneyMemoriesDetailsComponent
} from "../commons/edit-journey-memories-details/edit-journey-memories-details.component";

@Component({
  selector: 'app-create-journey',
  standalone: true,
  imports: [
    MatStepperModule,
    NgIf,
    EditJourneyMemoriesDetailsComponent
  ],
  templateUrl: './create-journey.component.html',
  styleUrl: './create-journey.component.scss'
})
export class CreateJourneyComponent {
  journey = signal<Journey>(new Journey());

  isBasicDetailsAvailable = computed<boolean>(() =>
    this.journey().id !== undefined && this.journey().id !== '' && this.journey().id !== null)

}
