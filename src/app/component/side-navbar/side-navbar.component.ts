import {Component} from '@angular/core';
import {
  DASHBOARD_PAGE_INFO,
  GALLERY_PAGE_INFO,
  HOME_PAGE_INFO,
  JOURNEY_SEARCH_PAGE_INFO,
  LOGIN_PAGE_INFO, LOGOUT_PAGE_INFO,
  NEW_JOURNEY_PAGE_INFO,
} from "../../model/page-info";
import {AuthService} from "../../service/auth/auth.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
  protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;
  protected readonly DASHBOARD_PAGE_INFO = DASHBOARD_PAGE_INFO;
  protected readonly GALLERY_PAGE_INFO = GALLERY_PAGE_INFO;
  protected readonly JOURNEY_SEARCH_PAGE_INFO = JOURNEY_SEARCH_PAGE_INFO;
  protected readonly NEW_JOURNEY_PAGE_INFO = NEW_JOURNEY_PAGE_INFO;

  constructor(private authService: AuthService) {
  }

  appVersion = environment.version;

  isAuthenticated() {
    return this.authService.isUserAuthenticatedAsObservable();
  }

  protected readonly LOGIN_PAGE_INFO = LOGIN_PAGE_INFO;
  protected readonly LOGOUT_PAGE_INFO = LOGOUT_PAGE_INFO;
}
