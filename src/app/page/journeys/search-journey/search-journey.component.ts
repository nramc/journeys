import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {JourneySearchCriteriaComponent} from "./journey-search-criteria/journey-search-criteria.component";
import {JourneysListComponent} from "./journeys-list/journeys-list.component";

@Component({
  selector: 'app-search-journey',
  templateUrl: './search-journey.component.html',
  styles: [],
  imports: [
    PageHeaderComponent,
    JourneySearchCriteriaComponent,
    JourneysListComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchJourneyComponent {
  queryString = signal<string>('');

}
