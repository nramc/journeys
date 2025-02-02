import {Component, inject, input} from '@angular/core';
import {DatePipe, NgIf} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";
import {Journey} from "../../../../model/core/journey.model";
import {HasWriteAccessDirective} from "../../../../directive/has-write-access.directive";
import {Router} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-view-journey-header',
    imports: [
        DatePipe,
        MatTooltip,
        HasWriteAccessDirective,
        MatIconModule,
        MatButtonModule,
        NgIf
    ],
    template: `
    <h4 class="flex flex-col md:flex-row items-center gap-4">
      <!-- Journey Date -->
      <span class="text-sm text-primary border-2 border-gradient-primary badge rounded-md px-2 py-1">
        <span class="journey-date">{{ journey().journeyDate | date: 'dd.MM.YYYY' }}</span>
      </span>

      <!-- Journey Name and Status -->
      <span class="flex flex-row items-center gap-1">
        <span class="text-lg font-semibold text-center">{{ journey().name }}</span>

        <!-- Published/Not Published Icon -->
        <mat-icon *ngIf="journey().isPublished" class="text-success! !overflow-visible" matTooltip="Published">check_circle</mat-icon>
        <mat-icon *ngIf="!journey().isPublished" class="text-warning! !overflow-visible"
                  matTooltip="Not Published">remove_circle</mat-icon>

        <!-- Edit Journey Button -->
        <button mat-icon-button *appHasWriteAccess matTooltip="Edit Journey" (click)="editJourney()">
            <mat-icon>edit</mat-icon>
        </button>
      </span>
    </h4>
  `,
    styles: []
})
export class ViewJourneyHeaderComponent {
  private readonly router = inject(Router);
  journey = input.required<Journey>();

  editJourney() {
    this.router.navigate(['/journey', this.journey().id, 'edit']).then();
  }

}
