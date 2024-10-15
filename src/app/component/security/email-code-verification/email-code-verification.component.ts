import {ChangeDetectionStrategy, Component, DestroyRef, inject, model} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {EmailConfirmationCodeService} from "../../../service/confirmation-code/email-confirmation-code.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Credential, LoginService} from "../../../service/auth/login.service";
import {AuthService} from "../../../service/auth/auth.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-email-code-verification',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule
  ],
  templateUrl: './email-code-verification.component.html',
  styleUrl: './email-code-verification.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailCodeVerificationComponent {
  private destroyRef = inject(DestroyRef);
  private emailConfirmationCodeService = inject(EmailConfirmationCodeService);
  private loginService = inject(LoginService);
  private authService = inject(AuthService);
  dialogRef: MatDialogRef<EmailCodeVerificationComponent> = inject(MatDialogRef<EmailCodeVerificationComponent>);
  credential: Credential = inject(MAT_DIALOG_DATA);

  isCodeSent = model(false);
  canSendCode = model(true);
  isCodeValid = model(true);

  confirmCode(confirmationCode: HTMLInputElement, confirmButton: HTMLButtonElement) {
    this.isCodeValid.set(true);
    if (confirmationCode.validity.valid) {
      confirmButton.disabled = true;
      this.credential ? this.verifyCodeInUnauthenticatedContext(confirmationCode, confirmButton)
        : this.verifyCodeInAuthenticatedContext(confirmationCode, confirmButton);
    } else {
      this.isCodeValid.set(false);
      console.log('invalid code')
    }

  }

  verifyCodeInUnauthenticatedContext(confirmationCode: HTMLInputElement, confirmButton: HTMLButtonElement) {
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

  verifyCodeInAuthenticatedContext(confirmationCode: HTMLInputElement, confirmButton: HTMLButtonElement) {
    this.emailConfirmationCodeService.verifyConfirmationCode(confirmationCode.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: _ => this.onVerificationSuccess(confirmButton),
        error: err => this.onVerificationError(err, confirmButton)
      })
  }

  onVerificationSuccess(confirmButton: HTMLButtonElement) {
    confirmButton.disabled = true;
    console.log('code verified successfully')
    this.dialogRef.close(true);
  }

  onVerificationError(err: any, confirmButton: HTMLButtonElement) {
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

  onSentError(err: any) {
    console.log(err)
    this.canSendCode.set(true);
  }

  onSentSuccess() {
    this.isCodeSent.set(true);
    setTimeout(() => this.canSendCode.set(true), 1000 * 60);
    console.log('Code has been sent successfully to register email')
  }


}
