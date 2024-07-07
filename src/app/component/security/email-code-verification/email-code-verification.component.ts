import {Component, DestroyRef, inject, model} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {EmailConfirmationCodeService} from "../../../service/confirmation-code/email-confirmation-code.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-email-code-verification',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  templateUrl: './email-code-verification.component.html',
  styleUrl: './email-code-verification.component.scss'
})
export class EmailCodeVerificationComponent {
  private destroyRef = inject(DestroyRef);
  private emailConfirmationCodeService = inject(EmailConfirmationCodeService);
  dialogRef: MatDialogRef<EmailCodeVerificationComponent> = inject(MatDialogRef<EmailCodeVerificationComponent>);
  isCodeSent = model(false);
  canSendCode = model(true);
  isCodeValid = model(true);

  confirmCode(confirmationCode: HTMLInputElement, confirmButton: HTMLButtonElement) {
    this.isCodeValid.set(true);
    if (confirmationCode.validity.valid) {
      confirmButton.disabled = true;
      this.emailConfirmationCodeService.verifyConfirmationCode(confirmationCode.value)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: _ => this.onVerificationSuccess(confirmButton),
          error: err => this.onVerificationError(err, confirmButton)
        })
    } else {
      this.isCodeValid.set(false);
      console.log('invalid code')
    }

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
    this.emailConfirmationCodeService.sendConfirmationCode()
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
