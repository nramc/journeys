import {Component, DestroyRef, inject, model} from '@angular/core';
import {FeedbackMessageComponent} from "../../../component/feedback-message/feedback-message.component";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {LOGIN_PAGE_INFO} from "../../../model/page.info.model";
import {LoginService} from "../../../service/auth/login.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

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
  styles: ''
})
export class SignupComponent {
  protected readonly LOGIN_PAGE_INFO = LOGIN_PAGE_INFO;
  destroyRef = inject(DestroyRef);
  loginService = inject(LoginService);

  form = new SignupForm();
  isSuccessful = model(false);
  isErrorOccurred = model(false);

  signup(signupForm: NgForm) {
    this.isSuccessful.set(false);

    if (signupForm.valid) {
      this.loginService.signup({
        username: this.form.username,
        password: this.form.password,
        name: this.form.name
      }).pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: _ => this.onSuccessCallback(),
          error: err => this.onErrorCallback(err)
        });
    } else {
      this.onErrorCallback();
    }
  }

  onSuccessCallback() {
    this.isSuccessful.set(true);
  }

  onErrorCallback(err: any = {}) {
    console.log('data not valid', err);
    this.isErrorOccurred.set(true);
  }
}
