import {Component, inject, output} from '@angular/core';
import {
  ABOUT_PAGE_INFO,
  DASHBOARD_PAGE_INFO,
  GALLERY_PAGE_INFO,
  HOME_PAGE_INFO,
  JOURNEY_SEARCH_PAGE_INFO,
  LOGIN_PAGE_INFO,
  LOGOUT_PAGE_INFO,
  STATISTICS_PAGE_INFO,
  TIMELINE_PAGE_INFO,
  TOOLS_PAGE_INFO
} from "../../model/page.info.model";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {NgIf} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AuthService} from "../../service/auth/auth.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-navigation-menu',
    imports: [
        MatSidenavModule, RouterLink, MatIconModule, MatListModule, RouterLinkActive, MatMenuModule, NgIf, MatToolbarModule
    ],
    templateUrl: './navigation-menu.component.html',
    styles: []
})
export class NavigationMenuComponent {

  protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;
  protected readonly DASHBOARD_PAGE_INFO = DASHBOARD_PAGE_INFO;
  protected readonly GALLERY_PAGE_INFO = GALLERY_PAGE_INFO;
  protected readonly JOURNEY_SEARCH_PAGE_INFO = JOURNEY_SEARCH_PAGE_INFO;
  protected readonly STATISTICS_PAGE_INFO = STATISTICS_PAGE_INFO;
  protected readonly TIMELINE_PAGE_INFO = TIMELINE_PAGE_INFO;
  protected readonly TOOLS_PAGE_INFO = TOOLS_PAGE_INFO;
  protected readonly ABOUT_PAGE_INFO = ABOUT_PAGE_INFO;
  protected readonly LOGIN_PAGE_INFO = LOGIN_PAGE_INFO;
  protected readonly LOGOUT_PAGE_INFO = LOGOUT_PAGE_INFO;

  authService = inject(AuthService);
  isUserAuthenticated = toSignal(this.authService.isUserAuthenticatedAsObservable(), {initialValue: false});

  navigationLinkClick = output<void>();
}
