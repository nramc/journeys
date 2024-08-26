import {Component, OnInit, signal} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {FeedbackMessageComponent} from "../../../component/feedback-message/feedback-message.component";
import {NgIf} from "@angular/common";
import {AuthService} from "../../../service/auth/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FeedbackMessage} from "../../../component/feedback-message/feedback-message";
import {Credential, LoginResponse, LoginService} from "../../../service/auth/login.service";
import {UserContext} from "../../../service/auth/user-context";
import {MfaOptions} from "../display-mfa-options/display-mfa-options.component";
import {SIGNUP_PAGE_INFO} from "../../../model/page.info.model";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    FeedbackMessageComponent,
    NgIf,
    RouterLink,
    MatProgressSpinner
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  feedbackMessage = signal<FeedbackMessage>({});
  isLoading = signal(false);

  form: LoginForm = new LoginForm();

  constructor(
    private authService: AuthService,
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.messageBanner = this.activatedRoute.snapshot.queryParams['q'];
  }

  messageBanner: string = '';

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      this.isLoading.set(true);
      let credential: Credential = {username: this.form.userName, password: this.form.password};
      this.loginService.login(credential)
        .subscribe({
          next: loginResponse => this.onLoginSuccess(credential, loginResponse),
          error: error => {
            loginForm.resetForm();
            this.onLoginFailed(error);
          }
        });
    }
  }

  onLoginSuccess(credential: Credential, loginResponse: LoginResponse) {
    this.isLoading.set(false);
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
    this.isLoading.set(false);
    console.error(error);
    this.feedbackMessage.set({error: 'Login failed. ' + error.message});
  }

  onLogOnSuccess(userContext: UserContext) {
    this.isLoading.set(false);
    this.feedbackMessage.set({success: 'Login successful for ' + userContext.name});
    let targetUrl = this.activatedRoute.snapshot.queryParams['redirectUrl'] ?? '/home';
    this.router.navigateByUrl(targetUrl).then(console.log);
  }

  loginAsGuest() {
    this.isLoading.set(true);
    this.loginService.loginAsGuest().subscribe({
      next: loginResponse => {
        let userContext = this.authService.getUserContextForSuccessfulLogin(loginResponse);
        this.onLogOnSuccess(userContext);
      },
      error: error => this.onLoginFailed(error)
    });
  }

  protected readonly SIGNUP_PAGE_INFO = SIGNUP_PAGE_INFO;
  forgotPasswordAssistanceUrl: string = "https://github.com/nramc/journeys/issues/new?assignees=&labels=bug&projects=&template=bug-report-form.yml&title=%5BBug%5D%3A+";
}

class LoginForm {
  constructor(public userName: string = '', public password: string = '') {
  }
}

