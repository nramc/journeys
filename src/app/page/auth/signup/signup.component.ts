import {ChangeDetectionStrategy, Component, DestroyRef, inject, model, signal} from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import { NgOptimizedImage } from "@angular/common";
import {RouterLink} from "@angular/router";
import {LOGIN_PAGE_INFO} from "../../../model/page.info.model";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {RegistrationService, SignupRequest} from "../../../service/registration/registration.service";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: 'app-signup',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIcon,
    NgOptimizedImage
],
    templateUrl: './signup.component.html',
    styles: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {
  protected readonly LOGIN_PAGE_INFO = LOGIN_PAGE_INFO;

  destroyRef = inject(DestroyRef);
  registrationService = inject(RegistrationService);

  showPassword = signal(false);

  form = signal<SignupRequest>({
    username: '',
    password: '',
    name: ''
  });
  isSuccessful = model(false);
  isErrorOccurred = model(false);

  signup(signupForm: NgForm) {
    this.isSuccessful.set(false);

    if (signupForm.valid) {
      this.registrationService.signup(this.form())
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: _ => this.onSuccessCallback(),
          error: err => this.onErrorCallback(err)
        });
    }
  }

  onSuccessCallback() {
    this.isSuccessful.set(true);
    this.isErrorOccurred.set(false);
  }

  onErrorCallback(err: Error) {
    console.log('error:', err);
    this.isErrorOccurred.set(true);
  }

  togglePasswordVisibility() {
    this.showPassword.update(value => !value);
  }
}
