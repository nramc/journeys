import {ChangeDetectionStrategy, Component, output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-journey-search-criteria',
  templateUrl: './journey-search-criteria.component.html',
  styles: [],
  imports: [
    FormsModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInput
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneySearchCriteriaComponent {
  searchEvent = output<string>();

  q = '';

  submitSearch(searchForm: NgForm) {
    if (searchForm.valid) {
      this.searchEvent.emit(this.q);
    }
  }

}
