import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {NEW_JOURNEY_PAGE_INFO, TIMELINE_PAGE_INFO} from "../../../model/page.info.model";
import {MatFabAnchor} from "@angular/material/button";
import {AuthService} from "../../../service/auth/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-quick-links',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    MatFabAnchor,
    NgIf
  ],
  templateUrl: './quick-links.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickLinksComponent {
  protected readonly NEW_JOURNEY_PAGE_INFO = NEW_JOURNEY_PAGE_INFO;
  protected readonly TIMELINE_PAGE_INFO = TIMELINE_PAGE_INFO;

  protected readonly authService =  inject(AuthService);
}
