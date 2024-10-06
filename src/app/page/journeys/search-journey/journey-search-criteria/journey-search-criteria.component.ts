import {Component, output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {MatSelect} from "@angular/material/select";
import {HasWriteAccessDirective} from "../../../../directive/has-write-access.directive";

@Component({
  selector: 'app-journey-search-criteria',
  templateUrl: './journey-search-criteria.component.html',
  styleUrl: './journey-search-criteria.component.scss',
  imports: [
    FormsModule,
    RouterLink,
    MatSelect,
    HasWriteAccessDirective
  ],
  standalone: true
})
export class JourneySearchCriteriaComponent {
  searchEvent = output<string>();

  q: string = '';

  submitSearch(searchForm: NgForm) {
    if (searchForm.valid) {
      this.searchEvent.emit(this.q);
    }
  }

}
