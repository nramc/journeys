import {Component, inject, input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";
import {Journey} from "../../../../model/core/journey.model";
import {HasWriteAccessDirective} from "../../../../directive/has-write-access.directive";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-journey-header',
  standalone: true,
  imports: [
    DatePipe,
    MatTooltip,
    HasWriteAccessDirective
  ],
  template: `
    <h4 class="d-inline-flex flex-column flex-md-row gap-2 align-content-center align-items-center">
      <span class="fs-6 small text-primary border border-2 border-gradient-primary badge"><span
        class="journey-date">{{ journey().journeyDate | date:"dd.MM.YYYY" }}</span></span>
      <span class="d-flex flex-row gap-2 align-items-center">
        <span class="gradient-text text-center">{{ journey().name }}</span>

        @if (journey().isPublished) {
          <i class="bi bi-check-circle-fill text-success fs-6" matTooltip="Published"></i>
        } @else {
          <i class="bi bi-dash-circle-fill text-warning fs-6" matTooltip="Not Published"></i>
        }

        <button class="btn btn-outline-primary btn-sm" type="button" *appHasWriteAccess
                [matTooltip]="'Edit Journey'" (click)="editJourney()">
        <i class="bi bi-pencil-square"></i>
      </button>
      </span>
    </h4>`,
  styles: [`
    .journey-date {
      font-size: smaller;
    }
  `]
})
export class ViewJourneyHeaderComponent {
  private readonly router = inject(Router);
  journey = input.required<Journey>();

  editJourney() {
    this.router.navigate(['/journey', this.journey().id, 'edit']).then();
  }

}
