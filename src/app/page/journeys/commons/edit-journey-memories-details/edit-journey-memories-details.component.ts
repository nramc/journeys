import {Component, model} from '@angular/core';
import {Journey} from "../../../../model/core/journey.model";

@Component({
  selector: 'app-edit-journey-memories-details',
  standalone: true,
  imports: [],
  templateUrl: './edit-journey-memories-details.component.html',
  styleUrl: './edit-journey-memories-details.component.scss'
})
export class EditJourneyMemoriesDetailsComponent {
  journey = model<Journey>(new Journey())

}
