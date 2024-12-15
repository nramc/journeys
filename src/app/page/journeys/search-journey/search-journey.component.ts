import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {JourneySearchCriteriaComponent} from "./journey-search-criteria/journey-search-criteria.component";
import {JourneysListComponent} from "./journeys-list/journeys-list.component";
import {JOURNEY_SEARCH_PAGE_INFO} from "../../../model/page.info.model";

@Component({
    selector: 'app-search-journey',
    templateUrl: './search-journey.component.html',
    styles: [],
    imports: [
        PageHeaderComponent,
        JourneySearchCriteriaComponent,
        JourneysListComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchJourneyComponent {
  queryString = signal<string>('');

    protected readonly JOURNEY_SEARCH_PAGE_INFO = JOURNEY_SEARCH_PAGE_INFO;
}
