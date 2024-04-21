import {Component, Input} from '@angular/core';
import {Journey} from "../../../../model/core/journey.model";

@Component({
  selector: 'app-view-journey-basic-details',
  standalone: true,
  imports: [],
  templateUrl: './view-journey-basic-details.component.html',
  styleUrl: './view-journey-basic-details.component.scss'
})
export class ViewJourneyBasicDetailsComponent {
  @Input("journey") journey!: Journey;


}
