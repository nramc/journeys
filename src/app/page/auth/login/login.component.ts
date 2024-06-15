import {Component, OnInit, signal} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {FeedbackMessageComponent} from "../../../component/feedback-message/feedback-message.component";
import {NgIf} from "@angular/common";
import {AuthService} from "../../../service/auth/auth.service";
import {UserContext} from "../../../service/auth/user-context";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FeedbackMessage} from "../../../component/feedback-message/feedback-message";

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
      this.authService.login(this.form.userName, this.form.password)
        .subscribe({
          next: userContext => this.onLoginSuccess(userContext),
          error: error => {
            loginForm.resetForm();
            this.onLoginFailed(error);
          }
        });
    }
  }

  onLoginSuccess(userContext: UserContext) {
    this.feedbackMessage.set({success: 'Login successful for ' + userContext.name});
    this.router.navigate(['/home']).then();
  }

  onLoginFailed(error: HttpErrorResponse) {
    console.error(error);
    this.feedbackMessage.set({error: 'Login failed. ' + error.message});
  }

  loginAsGuest() {
    this.authService.loginAsGuest().subscribe({
      next: userContext => this.onLoginSuccess(userContext),
      error: error => this.onLoginFailed(error)
    });
  }
}

class LoginForm {
  constructor(public userName: string = '', public password: string = '') {
  }
}

