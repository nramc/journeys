import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {NEW_JOURNEY_PAGE_INFO, TIMELINE_PAGE_INFO} from "../../../model/page.info.model";

@Component({
  selector: 'app-quick-links',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink
  ],
  templateUrl: './quick-links.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickLinksComponent {

  protected readonly NEW_JOURNEY_PAGE_INFO = NEW_JOURNEY_PAGE_INFO;
  protected readonly TIMELINE_PAGE_INFO = TIMELINE_PAGE_INFO;
}
