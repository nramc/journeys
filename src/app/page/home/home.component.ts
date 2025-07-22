import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {NgIf} from "@angular/common";
import {environment} from "../../../environments/environment";
import {BffService} from "../../service/bff/bff.service";
import {RouterLink} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import {QuickLinksComponent} from "./quick-links/quick-links.component";
import {JourneyService} from "../../service/journey/journey.service";
import {UpcomingAnniversariesComponent} from "./upcoming-aniversaries/upcoming-anniversaries.component";
import {HasWriteAccessDirective} from "../../directive/has-write-access.directive";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {ThirukkuralWidgetComponent} from "../../component/thirukkural/thirukkural-widget.component";
import {MatButtonModule} from "@angular/material/button";
import {AnonymousWelcomeMessageComponent} from "./anonymous-welcome-message/anonymous-welcome-message.component";
import {HasAuthenticatedDirective} from "../../directive/has-authenticated.directive";
import {UserContext} from "../../service/auth/user-context";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  imports: [
    NgIf,
    RouterLink,
    QuickLinksComponent,
    UpcomingAnniversariesComponent,
    HasWriteAccessDirective,
    MatIcon,
    MatProgressSpinner,
    ThirukkuralWidgetComponent,
    MatButtonModule,
    AnonymousWelcomeMessageComponent,
    HasAuthenticatedDirective
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  protected readonly authService = inject(AuthService);
  private readonly bffService = inject(BffService);
  private readonly journeyService = inject(JourneyService);
  appVersion = environment.version;
  userData = toSignal(this.authService.getUserContext(), {initialValue: new UserContext()});
  isUserAuthenticated = computed(() => this.userData()?.isAuthenticated)
  bffApiVersion = toSignal(this.bffService.getVersion());
  upcomingJourniversaries = toSignal(this.journeyService.getUpcomingAnniversary(),
    {initialValue: []});

}

