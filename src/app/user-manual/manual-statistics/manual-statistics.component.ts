import {Component, output} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-manual-statistics',
  imports: [
    RouterLink
  ],
  templateUrl: './manual-statistics.component.html',
  styles: []
})
export class ManualStatisticsComponent {
  thumbnailClicked = output<string>()

}
