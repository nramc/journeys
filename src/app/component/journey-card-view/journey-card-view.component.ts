import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {DatePipe, TitleCasePipe} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {JourneyData} from "./journey.data";
import {DEFAULT_CATEGORY, DEFAULT_THUMBNAIL, Journey} from "../../model/core/journey.model";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {HasWriteAccessDirective} from "../../directive/has-write-access.directive";
import {CATEGORY_ICONS} from "../../config/icon-config";

@Component({
  selector: 'app-journey-card-view',
  imports: [
    DatePipe,
    TitleCasePipe,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    HasWriteAccessDirective
  ],
  templateUrl: './journey-card-view.component.html',
  styleUrl: './journey-card-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyCardViewComponent {
  private readonly router = inject(Router);

  journey = input.required<JourneyData, JourneyData | Journey>({
    transform: (value: JourneyData | Journey) => this.transformJourney(value)
  });

  getCategoryIcon(): string {
    return CATEGORY_ICONS[this.journey().category?.toLowerCase()] ?? 'place';
  }

  editDetails($event: MouseEvent) {
    $event.stopPropagation();
    this.router.navigate(['/journey', this.journey().id, 'edit']).then(console.log);
    return false;
  }

  viewInTimeline($event: MouseEvent) {
    $event.stopPropagation();
    this.router.navigate(['/timeline'], {
      queryParams: {'id': this.journey().id}
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
