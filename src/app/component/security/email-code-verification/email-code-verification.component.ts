import {ChangeDetectionStrategy, Component, DestroyRef, inject, model} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {EmailConfirmationCodeService} from "../../../service/confirmation-code/email-confirmation-code.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Credential, LoginService} from "../../../service/auth/login.service";
import {AuthService} from "../../../service/auth/auth.service";
import {FormsModule} from "@angular/forms";

import {MatButton} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInput} from "@angular/material/input";

@Component({
    selector: 'app-email-code-verification',
    imports: [
    MatDialogModule,
    FormsModule,
    MatButton,
    MatFormFieldModule,
    MatCardModule,
    MatInput
],
    templateUrl: './email-code-verification.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailCodeVerificationComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly emailConfirmationCodeService = inject(EmailConfirmationCodeService);
  private readonly loginService = inject(LoginService);
  private readonly authService = inject(AuthService);
  dialogRef: MatDialogRef<EmailCodeVerificationComponent> = inject(MatDialogRef<EmailCodeVerificationComponent>);
  credential: Credential = inject(MAT_DIALOG_DATA);

  isCodeSent = model(false);
  canSendCode = model(true);
  isCodeValid = model(true);

  confirmCode(confirmationCode: HTMLInputElement, confirmButton: MatButton) {
    this.isCodeValid.set(true);
    if (confirmationCode.validity.valid) {
      this.verifyCode(confirmButton, confirmationCode);
    } else {
      this.isCodeValid.set(false);
    }
  }

  private verifyCode(confirmButton: MatButton, confirmationCode: HTMLInputElement) {
    confirmButton.disabled = true;
    if (this.credential) {
      this.verifyCodeInUnauthenticatedContext(confirmationCode, confirmButton)
    } else {
      this.verifyCodeInAuthenticatedContext(confirmationCode, confirmButton);
    }
  }

  verifyCodeInUnauthenticatedContext(confirmationCode: HTMLInputElement, confirmButton: MatButton) {
    confirmButton.disabled = true;
    this.loginService.mfa(confirmationCode.value, "EMAIL_ADDRESS", this.credential)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: loginResponse => {
          this.authService.getUserContextForSuccessfulLogin(loginResponse);
          this.onVerificationSuccess(confirmButton);
        },
        error: err => this.onVerificationError(err, confirmButton)
      });
  }

  verifyCodeInAuthenticatedContext(confirmationCode: HTMLInputElement, confirmButton: MatButton) {
    this.emailConfirmationCodeService.verifyConfirmationCode(confirmationCode.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: _ => this.onVerificationSuccess(confirmButton),
        error: err => this.onVerificationError(err, confirmButton)
      })
  }

  onVerificationSuccess(confirmButton: MatButton) {
    confirmButton.disabled = true;
    console.log('code verified successfully')
    this.dialogRef.close(true);
  }

  onVerificationError(err: Error, confirmButton: MatButton) {
    console.log(err);
    this.isCodeValid.set(false);
    confirmButton.disabled = false;
  }

  sendCode() {
    this.canSendCode.set(false);
    this.emailConfirmationCodeService.sendConfirmationCode(this.credential)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: _ => this.onSentSuccess(),
        error: err => this.onSentError(err)
      });
  }

  onSentError(err: Error) {
    console.log(err)
    this.canSendCode.set(true);
  }

  onSentSuccess() {
    this.isCodeSent.set(true);
    setTimeout(() => this.canSendCode.set(true), 1000 * 60);
    console.log('Code has been sent successfully to register email')
  }


}
