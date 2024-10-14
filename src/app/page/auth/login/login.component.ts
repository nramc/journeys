import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {AuthService} from "../../../service/auth/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Credential, LoginResponse, LoginService} from "../../../service/auth/login.service";
import {UserContext} from "../../../service/auth/user-context";
import {MfaOptions} from "../display-mfa-options/display-mfa-options.component";
import {SIGNUP_PAGE_INFO} from "../../../model/page.info.model";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NotificationService} from "../../../service/common/notification.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink,
    MatProgressSpinner,
    NgOptimizedImage
  ],
  templateUrl: './login.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  protected readonly SIGNUP_PAGE_INFO = SIGNUP_PAGE_INFO;
  forgotPasswordAssistanceUrl: string = "https://github.com/nramc/journeys/issues/new?" +
    "assignees=&labels=bug&projects=&template=bug-report-form.yml&title=%5BBug%5D%3A+";

  private readonly authService = inject(AuthService);
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly notificationService = inject(NotificationService);

  form = signal<Credential>({username: '', password: ''});

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      this.loginService.login(this.form())
        .subscribe({
          next: loginResponse => this.onLoginSuccess(this.form(), loginResponse),
          error: error => {
            loginForm.resetForm();
            this.onLoginFailed(error);
          }
        });
    }
  }

  onLoginSuccess(credential: Credential, loginResponse: LoginResponse) {
    if (loginResponse.additionalFactorRequired) {
      // redirect to a component which displays all security attributes
      let mfaOptions: MfaOptions = {
        credential: credential,
        options: loginResponse.securityAttributes
      };
      this.router.navigate(['mfa'], {
        queryParams: this.activatedRoute.snapshot.queryParams,
        state: mfaOptions
      })
        .then(console.log);
    } else {
      let userContext = this.authService.getUserContextForSuccessfulLogin(loginResponse);
      this.onLogOnSuccess(userContext);
    }
  }

  onLoginFailed(error: HttpErrorResponse) {
    console.error(error);
    this.notificationService.showError('Login failed. ' + error.message);
  }

  onLogOnSuccess(_: UserContext) {
    this.notificationService.showSuccess('Login successful!');
    let targetUrl = this.activatedRoute.snapshot.queryParams['redirectUrl'] ?? '/home';
    this.router.navigateByUrl(targetUrl).then(console.log);
  }

  loginAsGuest() {
    this.loginService.loginAsGuest().subscribe({
      next: loginResponse => {
        let userContext = this.authService.getUserContextForSuccessfulLogin(loginResponse);
        this.onLogOnSuccess(userContext);
      },
      error: error => this.onLoginFailed(error)
    });
  }

}
