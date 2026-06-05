import {ChangeDetectionStrategy, Component, inject, input, output, computed} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {JourneyData} from "./journey.data";
import {DEFAULT_CATEGORY, DEFAULT_THUMBNAIL, Journey} from "../../model/core/journey.model";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialog} from "@angular/material/dialog";
import {HasWriteAccessDirective} from "../../directive/has-write-access.directive";
import {getCategoryIconName, getCategoryLabel} from "../../config/icon-config";
import { getMemoryAgeBadge, MemoryAgeBadge } from '../../utility/date-utils';
import {JourneyBannerViewComponent} from "../journey-banner-view/journey-banner-view.component";

@Component({
  selector: 'app-journey-card-view',
  imports: [
    DatePipe,
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
  private readonly dialog = inject(MatDialog);

  journey = input.required<JourneyData, JourneyData | Journey>({
    transform: (value: JourneyData | Journey) => this.transformJourney(value)
  });

  getCategoryIconName(): string {
    return getCategoryIconName(this.journey().category);
  }

  getCategoryLabel(): string {
    return getCategoryLabel(this.journey().category);
  }

  editDetails($event: MouseEvent) {
    $event.stopPropagation();
    $event.preventDefault();
    this.router.navigate(['/journey', this.journey().id, 'edit']).then(console.log);
    return false;
  }

  /** When true, clicking Relive emits the output event (handled inline by parent).
   *  When false (default), navigates to the timeline page. */
  inlineRelive = input<boolean>(false);

  /** Emits the journey ID when the Relive button is clicked (only when inlineRelive is true) */
  relive = output<string>();

  viewInTimeline($event: MouseEvent) {
    $event.stopPropagation();
    $event.preventDefault();
    if (this.inlineRelive()) {
      this.relive.emit(this.journey().id);
    } else {
      this.router.navigate(['/timeline'], {
        queryParams: {'id': this.journey().id, 'autoplay': 'true'}
      });
    }
    return false;
  }

  /** Nostalgia badge for this journey (years ago, emoji, etc) */
  yearsAgoBadge = computed<MemoryAgeBadge | null>(() => getMemoryAgeBadge(this.journey().journeyDate));

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

  protected shareJourney($event: MouseEvent) {
    $event.stopPropagation();
    $event.preventDefault();
    this.dialog.open(JourneyBannerViewComponent, {
      data: this.journey(),
      panelClass: 'journey-share-dialog',
      maxWidth: '100vw',
    });
  }
}
