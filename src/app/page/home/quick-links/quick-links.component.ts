import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {NEW_JOURNEY_PAGE_INFO, TIMELINE_PAGE_INFO} from "../../../model/page.info.model";
import {MatButtonModule} from "@angular/material/button";
import {AuthService} from "../../../service/auth/auth.service";
import {HasAuthenticatedDirective} from "../../../directive/has-authenticated.directive";


@Component({
  selector: 'app-quick-links',
  imports: [
    MatIconModule,
    RouterLink,
    MatButtonModule,
    HasAuthenticatedDirective
  ],
  templateUrl: './quick-links.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickLinksComponent {
  protected readonly NEW_JOURNEY_PAGE_INFO = NEW_JOURNEY_PAGE_INFO;
  protected readonly TIMELINE_PAGE_INFO = TIMELINE_PAGE_INFO;

  protected readonly authService = inject(AuthService);
}
