import {Component} from '@angular/core';
import {JOURNEY_SEARCH_PAGE_INFO} from "../../../model/page-info";

@Component({
  selector: 'app-search-journey',
  templateUrl: './search-journey.component.html',
  styleUrl: './search-journey.component.scss'
})
export class SearchJourneyComponent {
  protected readonly JOURNEY_SEARCH_PAGE_INFO = JOURNEY_SEARCH_PAGE_INFO;


}
