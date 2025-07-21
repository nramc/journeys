import {Component, inject, input, output} from '@angular/core';
import {
  ABOUT_PAGE_INFO,
  DASHBOARD_PAGE_INFO,
  GALLERY_PAGE_INFO,
  HOME_PAGE_INFO,
  JOURNEY_SEARCH_PAGE_INFO,
  LOGIN_PAGE_INFO,
  STATISTICS_PAGE_INFO,
  TIMELINE_PAGE_INFO,
  TOOLS_PAGE_INFO,
  USER_MANUAL_PAGE_INFO
} from "../../model/page.info.model";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {NgIf} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AuthService} from "../../service/auth/auth.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {NavigationMenuItemComponent} from "../navigation-menu-item/navigation-menu-item.component";

@Component({
  selector: 'app-navigation-menu',
  imports: [
    MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, NgIf, MatToolbarModule, NavigationMenuItemComponent
  ],
  templateUrl: './navigation-menu.component.html',
  styles: []
})
export class NavigationMenuComponent {

  protected readonly HOME = HOME_PAGE_INFO;
  protected readonly DASHBOARD = DASHBOARD_PAGE_INFO;
  protected readonly GALLERY = GALLERY_PAGE_INFO;
  protected readonly JOURNEY_SEARCH = JOURNEY_SEARCH_PAGE_INFO;
  protected readonly STATISTICS = STATISTICS_PAGE_INFO;
  protected readonly TIMELINE = TIMELINE_PAGE_INFO;
  protected readonly TOOLS = TOOLS_PAGE_INFO;
  protected readonly ABOUT = ABOUT_PAGE_INFO;
  protected readonly USER_MANUAL = USER_MANUAL_PAGE_INFO;
  protected readonly LOGIN = LOGIN_PAGE_INFO;

  authService = inject(AuthService);
  isUserAuthenticated = toSignal(this.authService.isUserAuthenticatedAsObservable(), {initialValue: false});
  showLabel = input<boolean>(true);

  navigationLinkClick = output<void>();
}
