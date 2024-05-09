import {Component} from '@angular/core';
import {JOURNEY_SEARCH_PAGE_INFO} from "../../../model/page.info.model";
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {JourneySearchCriteriaComponent} from "./journey-search-criteria/journey-search-criteria.component";
import {JourneysListComponent} from "./journeys-list/journeys-list.component";

@Component({
  selector: 'app-search-journey',
  templateUrl: './search-journey.component.html',
  styleUrl: './search-journey.component.scss',
  imports: [
    PageHeaderComponent,
    JourneySearchCriteriaComponent,
    JourneysListComponent
  ],
  standalone: true
})
export class SearchJourneyComponent {
  protected readonly JOURNEY_SEARCH_PAGE_INFO = JOURNEY_SEARCH_PAGE_INFO;

  queryString: string = '';

  handleSearchEvent(queryString: string) {
    this.queryString = queryString;
    console.log('Search Event Received with ', queryString);
  }
}
