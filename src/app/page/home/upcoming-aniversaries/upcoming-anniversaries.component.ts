import {Component, input} from '@angular/core';
import {Journey} from "../../../model/core/journey.model";
import {JourneyCardViewComponent} from "../../../component/journey-card-view/journey-card-view.component";

@Component({
  selector: 'app-upcoming-anniversaries',
  standalone: true,
  imports: [
    JourneyCardViewComponent
  ],
  template: `
    <h4 class="gradient-text">Upcoming Anniversaries</h4>
    <div class="d-flex flex-column flex-md-row overflow-scroll">
      @for (journey of journeys(); track journey.id) {
        <app-journey-card-view [journey]="journey"></app-journey-card-view>
      }
    </div>
  `,
  styles: []
})
export class UpcomingAnniversariesComponent {
  journeys = input.required<Journey[]>();

}
