import {Component, inject, input} from '@angular/core';
import {DatePipe, NgIf, NgOptimizedImage} from "@angular/common";
import {Journey} from "../../model/core/journey.model";
import {Router} from "@angular/router";
import {HasWriteAccessDirective} from "../../directive/has-write-access.directive";

@Component({
  selector: 'app-journey-card-view',
  standalone: true,
  imports: [
    DatePipe,
    NgOptimizedImage,
    HasWriteAccessDirective,
    NgIf
  ],
  templateUrl: './journey-card-view.component.html',
  styleUrl: './journey-card-view.component.scss'
})
export class JourneyCardViewComponent {
  private router = inject(Router);
  journey = input.required<Journey>();

  viewDetails() {
    this.router.navigate(['/journey', this.journey().id, 'view']).then(console.log);
  }

  editDetails($event: MouseEvent) {
    $event.stopPropagation();
    this.router.navigate(['/journey', this.journey().id, 'edit']).then(console.log);
    return false;
  }

  viewInTimeline($event: MouseEvent) {
    $event.stopPropagation();
    this.router.navigate(['/timeline'], {
      queryParams: {
        'id': this.journey().id
      }
    }).then(console.log);
    return false;
  }
}
