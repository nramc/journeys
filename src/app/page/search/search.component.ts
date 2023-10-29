import { Component } from '@angular/core';
import {SEARCH_PAGE_INFO} from "../../model/page-info";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  protected readonly SEARCH_PAGE_INFO = SEARCH_PAGE_INFO;
}
