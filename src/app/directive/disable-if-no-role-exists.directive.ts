import {Directive, ElementRef, inject, input, OnInit, Renderer2} from '@angular/core';
import {AuthService} from "../service/auth/auth.service";
import {Role} from "../service/auth/role";

@Directive({
  selector: '[appDisableIfNoRoleExists]',
  standalone: true
})
export class DisableIfNoRoleExistsDirective implements OnInit {
  roles = input.required<Role[]>({alias: 'appDisableIfNoRoleExists'});

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private authService = inject(AuthService);

  ngOnInit(): void {
    this.checkRoleAndDisableIfRequired();
  }

  private checkRoleAndDisableIfRequired() {
    if (this.authService.hasAnyRole(this.roles())) {
      this.renderer.setProperty(this.el.nativeElement, 'disabled', false);
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'false');
      this.el.nativeElement.disabled = false;
    } else {
      this.renderer.setProperty(this.el.nativeElement, 'disabled', true);
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
      this.el.nativeElement.disabled = true;
    }
  }

}
