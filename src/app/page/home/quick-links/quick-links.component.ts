import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {NEW_JOURNEY_PAGE_INFO, TIMELINE_PAGE_INFO} from "../../../model/page.info.model";
import {HasWriteAccessDirective} from "../../../directive/has-write-access.directive";


@Component({
  selector: 'app-quick-links',
  imports: [
    MatIconModule,
    RouterLink,
    HasWriteAccessDirective
  ],
  templateUrl: './quick-links.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickLinksComponent {
  protected readonly NEW_JOURNEY_PAGE_INFO = NEW_JOURNEY_PAGE_INFO;
  protected readonly TIMELINE_PAGE_INFO = TIMELINE_PAGE_INFO;
}
