import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {environment} from "../../../environments/environment";
import {BffService} from "../../service/bff/bff.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {QuickLinksComponent} from "./quick-links/quick-links.component";
import {UpcomingAnniversariesComponent} from "./upcoming-aniversaries/upcoming-anniversaries.component";
import {ThirukkuralWidgetComponent} from "../../component/thirukkural/thirukkural-widget.component";
import {MatButtonModule} from "@angular/material/button";
import {AnonymousWelcomeMessageComponent} from "./anonymous-welcome-message/anonymous-welcome-message.component";
import {HasAuthenticatedDirective} from "../../directive/has-authenticated.directive";
import {UserContext} from "../../service/auth/user-context";
import {BffApiLoadingIndicatorComponent} from "./bff-api-loading-indicator/bff-api-loading-indicator.component";
import {WelcomeMessageComponent} from "./welcome-message/welcome-message.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  imports: [
    QuickLinksComponent,
    UpcomingAnniversariesComponent,
    ThirukkuralWidgetComponent,
    MatButtonModule,
    AnonymousWelcomeMessageComponent,
    HasAuthenticatedDirective,
    BffApiLoadingIndicatorComponent,
    WelcomeMessageComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  protected readonly authService = inject(AuthService);
  private readonly bffService = inject(BffService);
  appVersion = environment.version;
  userData = toSignal(this.authService.getUserContext(), {initialValue: new UserContext()});
  isUserAuthenticated = computed(() => this.userData()?.isAuthenticated)
  bffApiVersion = toSignal(this.bffService.getVersion(), {initialValue: null});

}

