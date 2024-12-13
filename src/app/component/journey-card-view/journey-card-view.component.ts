import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {DatePipe, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {JourneyData} from "./journey.data";
import {DEFAULT_CATEGORY, DEFAULT_THUMBNAIL, Journey} from "../../model/core/journey.model";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {HasWriteAccessDirective} from "../../directive/has-write-access.directive";

@Component({
  selector: 'app-journey-card-view',
  standalone: true,
  imports: [
    DatePipe,
    MatCardModule,
    MatButtonModule,
    NgIf,
    HasWriteAccessDirective
  ],
  templateUrl: './journey-card-view.component.html',
  styleUrl: './journey-card-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyCardViewComponent {
  private readonly router = inject(Router);

  journeyData = input.required<JourneyData, JourneyData | Journey>({
    alias: 'journey',
    transform: (value: JourneyData | Journey) => this.transformJourney(value)
  });

  viewDetails() {
    this.router.navigate(['/journey', this.journeyData().id, 'view']).then(console.log);
  }

  editDetails($event: MouseEvent) {
    $event.stopPropagation();
    this.router.navigate(['/journey', this.journeyData().id, 'edit']).then(console.log);
    return false;
  }

  viewInTimeline($event: MouseEvent) {
    $event.stopPropagation();
    this.router.navigate(['/timeline'], {
      queryParams: {
        'id': this.journeyData().id
      }
    }).then(console.log);
    return false;
  }

  transformJourney(value: JourneyData | Journey): JourneyData {
    if (Object.hasOwn(value, 'geoDetails') || value instanceof Journey) {
      const journeyValue = value as Journey;
      return new JourneyData(
        journeyValue.id,
        journeyValue.name,
        journeyValue.geoDetails?.title,
        journeyValue.geoDetails?.category ?? DEFAULT_CATEGORY,
        journeyValue.journeyDate,
        journeyValue.tags,
        journeyValue.thumbnail ?? DEFAULT_THUMBNAIL
      );
    } else {
      return value;
    }
  }

}
