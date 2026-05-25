import {Component, inject} from '@angular/core';
import {toSignal} from "@angular/core/rxjs-interop";
import {UserContext} from "../../../service/auth/user-context";
import {AuthService} from "../../../service/auth/auth.service";

@Component({
  selector: 'app-welcome-message',
  imports: [],
  templateUrl: './welcome-message.component.html',
  styles: []
})
export class WelcomeMessageComponent {
  protected readonly authService = inject(AuthService);
  userData = toSignal(this.authService.getUserContext(), {initialValue: new UserContext()});

}
