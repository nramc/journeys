import {Component} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {FeedbackMessageComponent} from "../../../component/feedback-message/feedback-message.component";
import {NgIf} from "@angular/common";

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

  login(loginForm: NgForm) {

  }

}

class LoginForm {
  constructor(public userName: string = '', public password: string = '') {
  }
}

