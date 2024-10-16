import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
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
  TOOLS_PAGE_INFO,
} from "../../model/page.info.model";
import {AuthService} from "../../service/auth/auth.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {NgIf, NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, RouterLinkActive, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavbarComponent {
  protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;
  protected readonly DASHBOARD_PAGE_INFO = DASHBOARD_PAGE_INFO;
  protected readonly GALLERY_PAGE_INFO = GALLERY_PAGE_INFO;
  protected readonly JOURNEY_SEARCH_PAGE_INFO = JOURNEY_SEARCH_PAGE_INFO;

  authService = inject(AuthService);
  isUserAuthenticated = toSignal(this.authService.isUserAuthenticatedAsObservable(), {initialValue: false});

  protected readonly LOGIN_PAGE_INFO = LOGIN_PAGE_INFO;
  protected readonly LOGOUT_PAGE_INFO = LOGOUT_PAGE_INFO;
  protected readonly ABOUT_PAGE_INFO = ABOUT_PAGE_INFO;
  protected readonly STATISTICS_PAGE_INFO = STATISTICS_PAGE_INFO;
  protected readonly TIMELINE_PAGE_INFO = TIMELINE_PAGE_INFO;
  protected readonly TOOLS_PAGE_INFO = TOOLS_PAGE_INFO;
}
