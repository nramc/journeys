import {Component} from '@angular/core';
import {
  DASHBOARD_PAGE_INFO,
  GALLERY_PAGE_INFO,
  HOME_PAGE_INFO, JOURNEY_SEARCH_PAGE_INFO, NEW_JOURNEY_PAGE_INFO,
  SEARCH_PAGE_INFO,
  WORKSPACE_PAGE_INFO
} from "../../model/page-info";

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {

  protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;
  protected readonly DASHBOARD_PAGE_INFO = DASHBOARD_PAGE_INFO;
  protected readonly SEARCH_PAGE_INFO = SEARCH_PAGE_INFO;
  protected readonly GALLERY_PAGE_INFO = GALLERY_PAGE_INFO;
  protected readonly WORKSPACE_PAGE_INFO = WORKSPACE_PAGE_INFO;

  protected readonly JOURNEY_SEARCH_PAGE_INFO = JOURNEY_SEARCH_PAGE_INFO;
  protected readonly NEW_JOURNEY_PAGE_INFO = NEW_JOURNEY_PAGE_INFO;
}
