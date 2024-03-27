import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-journey-search-criteria',
  templateUrl: './journey-search-criteria.component.html',
  styleUrl: './journey-search-criteria.component.scss'
})
export class JourneySearchCriteriaComponent {
  @Output() searchEvent = new EventEmitter<string>();

  submitSearch(searchForm: NgForm) {
    let criteria = new Array<string>();

    if (searchForm.value['name']) {
      criteria.push('name:' + searchForm.value.name);
    }
    if (searchForm.value['id']) {
      criteria.push('id:' + searchForm.value.id);
    }

    console.log("Search Event will be emitted with ", criteria)
    this.searchEvent.emit(criteria.join('&'));
  }

}
