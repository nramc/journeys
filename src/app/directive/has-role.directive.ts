import {Directive, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {DestroyedDirective} from "./destroyed-directive.directive";
import {AuthService} from "../service/auth/auth.service";
import {Subscription, takeUntil} from "rxjs";
import {Role} from "../service/auth/role";

@Directive({
  selector: '[hasRole]',
  standalone: true,
  hostDirectives: [NgIf, DestroyedDirective]
})
export class HasRoleDirective implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  private readonly ngIfDirective = inject(NgIf);
  private readonly destroyed$ = inject(DestroyedDirective).destroyed$;
  expectedRoles: Role[] = [];

  @Input() set hasRole(roles: Role[]) {
    this.expectedRoles = roles;
  }


  constructor(private readonly authService: AuthService) {
  }

  ngOnInit(): void {
    this.subscriptions.add(this.authService.getUserContext()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((userContext) => {
        this.ngIfDirective.ngIf = userContext.roles.some(role => this.expectedRoles.indexOf(role) != -1);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


}
