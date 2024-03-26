import {Component} from '@angular/core';
import {HOME_PAGE_INFO, JOURNEY_SEARCH_PAGE_INFO} from "../../../model/page-info";

@Component({
  selector: 'app-search-journey',
  templateUrl: './search-journey.component.html'
})
export class SearchJourneyComponent {

    protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;
    protected readonly JOURNEY_SEARCH_PAGE_INFO = JOURNEY_SEARCH_PAGE_INFO;
}
