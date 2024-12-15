import {Component, input} from '@angular/core';
import {Journey} from "../../../model/core/journey.model";
import {JourneyCardViewComponent} from "../../../component/journey-card-view/journey-card-view.component";

@Component({
    selector: 'app-upcoming-anniversaries',
    imports: [
        JourneyCardViewComponent
    ],
    template: `
    <div class="mt-6">
      <!-- Section Title -->
      <h2 class="text-gradient text-xl font-semibold mb-4">Upcoming Anniversaries</h2>

      <!-- Journey Cards Container -->
      <div class="flex flex-col md:flex-row gap-4 overflow-x-auto pb-2">
        @for (journey of journeys(); track journey.id) {
          <app-journey-card-view [journey]="journey"></app-journey-card-view>
        }
      </div>
    </div>

  `,
    styles: []
})
export class UpcomingAnniversariesComponent {
  journeys = input.required<Journey[]>();

}
