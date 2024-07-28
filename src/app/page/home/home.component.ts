import {Component, inject} from '@angular/core';
import {HOME_PAGE_INFO} from "../../model/page.info.model";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {AuthService} from "../../service/auth/auth.service";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {environment} from "../../../environments/environment";
import {BffService} from "../../service/bff/bff.service";
import {RouterLink} from "@angular/router";
import {TimelineService} from "../../service/timeline/timeline.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {TimelineComponent} from "../../component/timeline/timeline.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    PageHeaderComponent,
    AsyncPipe,
    NgIf,
    JsonPipe,
    TimelineComponent,
    RouterLink
  ],
  standalone: true
})
export class HomeComponent {
  protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;

  protected authService = inject(AuthService);
  private bffService = inject(BffService);
  private timelineService = inject(TimelineService);

  appVersion = environment.version;
  userData = toSignal(this.authService.getUserContext());
  bffApiVersion = toSignal(this.bffService.getVersion());
  timelineData = toSignal(this.timelineService.getTimelineForToday());

}

