import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {HasWriteAccessDirective} from "../../../directive/has-write-access.directive";
import {MatIconModule} from "@angular/material/icon";
import {toSignal} from "@angular/core/rxjs-interop";
import {UserContext} from "../../../service/auth/user-context";
import {AuthService} from "../../../service/auth/auth.service";

@Component({
  selector: 'app-welcome-message',
  imports: [
    MatIconModule,
    RouterLink,
    HasWriteAccessDirective
  ],
  templateUrl: './welcome-message.component.html',
  styles: []
})
export class WelcomeMessageComponent {
  protected readonly authService = inject(AuthService);
  userData = toSignal(this.authService.getUserContext(), {initialValue: new UserContext()});

}
