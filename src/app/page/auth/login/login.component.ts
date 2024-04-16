import {Component} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {FeedbackMessageComponent} from "../../../component/feedback-message/feedback-message.component";
import {NgIf} from "@angular/common";
import {AuthService} from "../../../service/auth/auth.service";
import {UserContext} from "../../../service/auth/user-context";
import {HttpErrorResponse} from "@angular/common/http";

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
export class LoginComponent {
  successMessage: string = '';
  errorMessage: string = '';

  form: LoginForm = new LoginForm();

  constructor(private authService: AuthService) {
  }

  login(loginForm: NgForm) {
    this.authService.login(this.form.userName, this.form.password)
      .subscribe({
        next: userContext => this.onLoginSuccess(userContext),
        error: error => this.onLoginFailed(error)
      });
  }

  onLoginSuccess(userContext: UserContext) {
    this.successMessage = 'Login successful';
  }

  onLoginFailed(error: HttpErrorResponse) {
    console.error(error);
    this.errorMessage = 'Login failed. ' + error.message;
  }

}

class LoginForm {
  constructor(public userName: string = '', public password: string = '') {
  }
}

