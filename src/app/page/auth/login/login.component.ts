import {Component, OnInit, signal} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {FeedbackMessageComponent} from "../../../component/feedback-message/feedback-message.component";
import {NgIf} from "@angular/common";
import {AuthService} from "../../../service/auth/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FeedbackMessage} from "../../../component/feedback-message/feedback-message";
import {Credential, LoginResponse, LoginService} from "../../../service/auth/login.service";
import {UserContext} from "../../../service/auth/user-context";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    FeedbackMessageComponent,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  feedbackMessage = signal<FeedbackMessage>({});

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
    if (loginResponse.additionalFactorRequired) {
      // redirect to a component which displays all security attributes
    } else {
      let userContext = this.authService.getUserContextForSuccessfulLogin(loginResponse);
      this.onLogOnSuccess(userContext);
    }
  }

  onLoginFailed(error: HttpErrorResponse) {
    console.error(error);
    this.feedbackMessage.set({error: 'Login failed. ' + error.message});
  }

  onLogOnSuccess(userContext: UserContext) {
    this.feedbackMessage.set({success: 'Login successful for ' + userContext.name});
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

class LoginForm {
  constructor(public userName: string = '', public password: string = '') {
  }
}

