import {Component} from '@angular/core';
import {FeedbackMessageComponent} from "../../../component/feedback-message/feedback-message.component";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {LOGIN_PAGE_INFO} from "../../../model/page.info.model";

export class SignupForm {
  constructor(
    public name: string = '',
    public username: string = '',
    public password: string = ''
  ) {
  }
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FeedbackMessageComponent,
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  protected readonly LOGIN_PAGE_INFO = LOGIN_PAGE_INFO;

  form = new SignupForm();

  signup(signupForm: NgForm) {
    if (signupForm.valid) {
      console.log('data valid');
    } else {
      console.log('data not valid');
    }
  }
}
