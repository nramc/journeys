import {Directive, inject, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../service/auth/auth.service";
import {Role} from "../service/auth/role";
import {toSignal} from "@angular/core/rxjs-interop";
import {UserContext} from "../service/auth/user-context";

@Directive({
  selector: '[appHasWriteAccess]',
  standalone: true
})
export class HasWriteAccessDirective {
  private readonly viewContainer = inject(ViewContainerRef);
  private readonly templateRef = inject(TemplateRef<never>);

  expectedRoles: Role[] = [Role.ADMINISTRATOR, Role.MAINTAINER, Role.AUTHENTICATED_USER];

  authService: AuthService = inject(AuthService);
  userContext = toSignal(this.authService.getUserContext(), {initialValue: new UserContext()});

  constructor() {
    const hasAccess = this.userContext().roles.some(role => this.expectedRoles.includes(role));
    if (hasAccess) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
