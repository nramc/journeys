import {Component, model} from '@angular/core';
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
  isSuccessful = model(false);

  signup(signupForm: NgForm) {
    this.isSuccessful.set(false);

    if (signupForm.valid) {
      this.onSuccessCallback(signupForm);
    } else {
      this.onErrorCallback();
    }
  }

  onSuccessCallback(signupForm: NgForm) {
    this.isSuccessful.set(true);
  }

  onErrorCallback() {
    console.log('data not valid');
  }
}
