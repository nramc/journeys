import {Component, Input} from '@angular/core';
import {Journey} from "../../../../model/core/journey.model";
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-view-journey-basic-details',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf
  ],
  templateUrl: './view-journey-basic-details.component.html',
  styleUrl: './view-journey-basic-details.component.scss'
})
export class ViewJourneyBasicDetailsComponent {
  @Input("journey") journey!: Journey;


}
