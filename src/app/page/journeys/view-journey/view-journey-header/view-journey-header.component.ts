import {Component, inject, input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";
import {Journey} from "../../../../model/core/journey.model";
import {HasWriteAccessDirective} from "../../../../directive/has-write-access.directive";
import {Router} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@Component({
  selector: 'app-view-journey-header',
  imports: [
    DatePipe,
    MatTooltip,
    HasWriteAccessDirective,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  template: `
    <h4 class="flex flex-col md:flex-row items-center gap-4">
      <!-- Journey Date -->
      <span class="text-sm text-primary border-2 border-gradient-primary badge rounded-md px-2 py-1">
        <span class="journey-date">{{ journey().journeyDate | date: 'dd.MM.yyyy' }}</span>
      </span>

      <!-- Journey Name and Status -->
      <span class="flex flex-row items-center gap-1">
        <span class="text-lg font-semibold text-center">{{ journey().name }}</span>

        <!-- Published/Not Published Icon -->
        @if (journey().isPublished) {
          <mat-icon class="text-success! !overflow-visible" matTooltip="Published">check_circle</mat-icon>
        } @else {
          <mat-icon class="text-warning! !overflow-visible" matTooltip="Not Published">remove_circle</mat-icon>
        }

        <button
          mat-icon-button
          [matMenuTriggerFor]="journeyActionsMenu"
          aria-label="Journey actions"
          matTooltip="Journey actions"
        >
          <mat-icon>more_vert</mat-icon>
        </button>
      </span>
    </h4>

    <mat-menu #journeyActionsMenu="matMenu">
      <button mat-menu-item *appHasWriteAccess (click)="editJourney()">
        <mat-icon>edit</mat-icon>
        <span>Edit journey</span>
      </button>
      <button mat-menu-item (click)="viewInTimeline()">
        <mat-icon>play_circle</mat-icon>
        <span>Relive in timeline</span>
      </button>
      <button mat-menu-item (click)="shareJourney()">
        <mat-icon>share</mat-icon>
        <span>Share journey</span>
      </button>
    </mat-menu>
  `,
  styles: []
})
export class ViewJourneyHeaderComponent {
  private readonly router = inject(Router);
  journey = input.required<Journey>();

  editJourney() {
    this.router.navigate(['/journey', this.journey().id, 'edit']).then();
  }

  viewInTimeline() {
    this.router.navigate(['/timeline'], {
      queryParams: { id: this.journey().id, autoplay: 'true' }
    }).then();
  }

  async shareJourney() {
    const journey = this.journey();
    const shareData = {
      title: journey.name,
      text: `Explore my journey: ${journey.name}`,
      url: window.location.href
    };

    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(shareData.url);
  }

}
