import {ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, viewChild} from '@angular/core';
import {AuthService} from "../../../service/auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutComponent implements OnInit {
  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  logoutDialog = viewChild.required<ElementRef<HTMLDialogElement>>('logoutDialog');

  ngOnInit(): void {
    const isForcedLogout = this.activatedRoute.snapshot.queryParams['forced'] ?? false;
    if (isForcedLogout) {
      this.logout();
    } else {
      this.logoutDialog().nativeElement.showModal();
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'], {queryParams: {'q': 'logoutSuccessful'}})
      .then(console.log);
  }

  home() {
    this.router.navigate(['/'], {queryParams: {'q': 'logoutSuccessful'}})
      .then(console.log);
  }

}
