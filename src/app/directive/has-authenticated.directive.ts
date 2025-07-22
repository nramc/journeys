import {computed, Directive, effect, inject, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../service/auth/auth.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {UserContext} from "../service/auth/user-context";

@Directive({
  selector: '[appHasAuthenticated]',
  standalone: true
})
export class HasAuthenticatedDirective {
  private readonly viewContainer = inject(ViewContainerRef);
  private readonly templateRef = inject(TemplateRef<never>);

  authService: AuthService = inject(AuthService);
  userContext = toSignal(this.authService.getUserContext(), {initialValue: new UserContext()});
  isUserAuthenticated = computed(() => this.userContext().isAuthenticated)

  constructor() {
    effect(() => {
      if (this.isUserAuthenticated()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    })

  }

}
