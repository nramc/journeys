import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-journey-search-criteria',
  templateUrl: './journey-search-criteria.component.html',
  styleUrl: './journey-search-criteria.component.scss',
  imports: [
    FormsModule,
    RouterLink
  ],
  standalone: true
})
export class JourneySearchCriteriaComponent {
  @Output() searchEvent = new EventEmitter<string>();

  submitSearch(searchForm: NgForm) {
    let criteria = new Array<string>();


    console.log("Search Event will be emitted with ", criteria)
    this.searchEvent.emit(criteria.join('&'));
  }

}
