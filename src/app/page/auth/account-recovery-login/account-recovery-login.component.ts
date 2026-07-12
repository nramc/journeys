import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {RouterLink, ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import {LoginService} from "../../../service/auth/login.service";
import {AuthService} from "../../../service/auth/auth.service";
import {ACCOUNT_RECOVERY_PAGE_INFO, LOGIN_PAGE_INFO} from "../../../model/page.info.model";

@Component({
  selector: 'app-account-recovery-login',
  imports: [
    RouterLink,
    NgOptimizedImage,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule
  ],
  templateUrl: './account-recovery-login.component.html',
  styles: `
    @keyframes pop-in {
      from { transform: scale(0.6); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .pop-in {
      animation: pop-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountRecoveryLoginComponent implements OnInit {
  protected readonly LOGIN_PAGE_INFO = LOGIN_PAGE_INFO;
  protected readonly ACCOUNT_RECOVERY_PAGE_INFO = ACCOUNT_RECOVERY_PAGE_INFO;

  private readonly loginService = inject(LoginService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly token: string | null;

  isLoading = signal<boolean>(true);
  isSuccessful = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  constructor() {
    const route = inject(ActivatedRoute);
    this.token = route.snapshot.queryParamMap.get('token');
  }

  ngOnInit(): void {
    if (!this.token) {
      this.isLoading.set(false);
      this.errorMessage.set('This recovery link is invalid or incomplete.');
      return;
    }
    this.attemptLogin(this.token);
  }

  private attemptLogin(token: string) {
    this.loginService.loginWithOneTimeToken(token).subscribe({
      next: loginResponse => {
        this.authService.getUserContextForSuccessfulLogin(loginResponse);
        this.isLoading.set(false);
        this.isSuccessful.set(true);
        setTimeout(() => this.router.navigateByUrl('/home'), 1200);
      },
      error: error => this.onError(error)
    });
  }

  private onError(error: HttpErrorResponse) {
    console.error(error);
    this.isLoading.set(false);
    this.errorMessage.set('This recovery link is invalid or has expired. Please request a new one.');
  }
}
