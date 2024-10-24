import {ChangeDetectionStrategy, Component, DestroyRef, inject, model, signal} from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {LOGIN_PAGE_INFO} from "../../../model/page.info.model";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {RegistrationService, SignupRequest} from "../../../service/registration/registration.service";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './signup.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {
  protected readonly LOGIN_PAGE_INFO = LOGIN_PAGE_INFO;

  destroyRef = inject(DestroyRef);
  registrationService = inject(RegistrationService);

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
    } else {
      this.onErrorCallback(new Error('form data invalid'));
    }
  }

  onSuccessCallback() {
    this.isSuccessful.set(true);
  }

  onErrorCallback(err: Error) {
    console.log('data not valid', err);
    this.isErrorOccurred.set(true);
  }
}
