import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-journey-search-criteria',
  templateUrl: './journey-search-criteria.component.html',
  styleUrl: './journey-search-criteria.component.scss',
  imports: [
    FormsModule,
    RouterLink,
    MatSelect
  ],
  standalone: true
})
export class JourneySearchCriteriaComponent {
  @Output() searchEvent = new EventEmitter<string>();
  q: string = '';

  submitSearch(searchForm: NgForm) {
    if (searchForm.valid) {
      this.searchEvent.emit(this.q);
    }
  }

}
