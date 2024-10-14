import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {HOME_PAGE_INFO} from "../../model/page.info.model";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {AuthService} from "../../service/auth/auth.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {environment} from "../../../environments/environment";
import {BffService} from "../../service/bff/bff.service";
import {RouterLink} from "@angular/router";
import {TimelineService} from "../../service/timeline/timeline.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {TimelineComponent} from "../../component/timeline/timeline.component";
import {HasWriteAccessDirective} from "../../directive/has-write-access.directive";
import {QuickLinksComponent} from "./quick-links/quick-links.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  imports: [
    PageHeaderComponent,
    AsyncPipe,
    NgIf,
    TimelineComponent,
    RouterLink,
    HasWriteAccessDirective,
    QuickLinksComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;

  protected authService = inject(AuthService);
  private bffService = inject(BffService);
  private timelineService = inject(TimelineService);

  appVersion = environment.version;
  userData = toSignal(this.authService.getUserContext());
  isUserAuthenticated = computed(() => this.userData()?.isAuthenticated)
  bffApiVersion = toSignal(this.bffService.getVersion());
  timelineData = toSignal(this.timelineService.getTimelineForToday());

}

