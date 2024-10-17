import {Directive, inject} from '@angular/core';
import {NgIf} from "@angular/common";
import {AuthService} from "../service/auth/auth.service";
import {Role} from "../service/auth/role";
import {toSignal} from "@angular/core/rxjs-interop";
import {UserContext} from "../service/auth/user-context";

@Directive({
  selector: '[appHasWriteAccess]',
  standalone: true,
  hostDirectives: [NgIf]
})
export class HasWriteAccessDirective {
  private readonly ngIfDirective = inject(NgIf);
  expectedRoles: Role[] = [Role.ADMINISTRATOR, Role.MAINTAINER, Role.AUTHENTICATED_USER];

  authService: AuthService = inject(AuthService);
  userContext = toSignal(this.authService.getUserContext(), {initialValue: new UserContext()});

  constructor() {
    this.ngIfDirective.ngIf = this.userContext().roles.some(role => this.expectedRoles.indexOf(role) != -1);
  }

}
