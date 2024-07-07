import {Directive, inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgIf} from "@angular/common";
import {DestroyedDirective} from "./destroyed-directive.directive";
import {AuthService} from "../service/auth/auth.service";
import {takeUntil} from "rxjs";
import {Role} from "../service/auth/role";

@Directive({
  selector: '[hasWriteAccess]',
  standalone: true,
  hostDirectives: [NgIf, DestroyedDirective]
})
export class HasWriteAccessDirective implements OnInit, OnChanges {
  private readonly ngIfDirective = inject(NgIf);
  private readonly destroyed$ = inject(DestroyedDirective).destroyed$;
  expectedRoles: Role[] = [Role.ADMINISTRATOR, Role.MAINTAINER, Role.AUTHENTICATED_USER];

  constructor(private readonly authService: AuthService) {
  }

  ngOnInit(): void {
    this.applyVisibility();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.applyVisibility();
  }

  private applyVisibility() {
    this.authService.getUserContext()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((userContext) => {
        this.ngIfDirective.ngIf = userContext.roles.some(role => this.expectedRoles.indexOf(role) != -1);
      });
  }


}
