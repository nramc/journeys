import {Component, OnInit} from '@angular/core';
import {JOURNEY_SEARCH_PAGE_INFO} from "../../../model/page-info";

@Component({
  selector: 'app-search-journey',
  templateUrl: './search-journey.component.html',
  styleUrl: './search-journey.component.scss'
})
export class SearchJourneyComponent implements OnInit {
  protected readonly JOURNEY_SEARCH_PAGE_INFO = JOURNEY_SEARCH_PAGE_INFO;


  criteria: Map<string, string> = new Map();

  ngOnInit(): void {
    this.criteria.set('q', 'repo:angular/components');
  }


  handleSearchEvent(queryString: string) {
    this.criteria = this.criteria.set("q", queryString);
  }
}
