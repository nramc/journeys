import {Component, DestroyRef, Inject, inject, model} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {NgIf} from "@angular/common";
import {MyAccountService} from "../../../service/my-account/my-account.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {TotpCodeVerification} from "../../../service/my-account/totp-code-verification";
import {Credential, LoginService} from "../../../service/auth/login.service";
import {AuthService} from "../../../service/auth/auth.service";

@Component({
  selector: 'app-totp-code-verification',
  standalone: true,
  imports: [
    MatDialogClose,
    NgIf
  ],
  templateUrl: './totp-code-verification.component.html',
  styleUrl: './totp-code-verification.component.scss'
})
export class TotpCodeVerificationComponent {
  private destroyRef = inject(DestroyRef);
  private myAccountService = inject(MyAccountService);
  private loginService = inject(LoginService);
  private authService = inject(AuthService);
  dialogRef: MatDialogRef<TotpCodeVerificationComponent> = inject(MatDialogRef<TotpCodeVerificationComponent>);
  credential: Credential | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Credential) {
    this.credential = data;
  }

  isCodeInvalid = model<boolean>(false);

  confirmCode(confirmationCode: HTMLInputElement) {
    if (confirmationCode.validity.valid) {
      if (this.credential) {
        this.verifyCodeInUnauthenticatedContext(confirmationCode.value, this.credential);
      } else {
        this.verifyCodeInAuthenticatedContext(confirmationCode.value);
      }
    } else {
      console.log('Code invalid');
    }
  }

  verifyCodeInUnauthenticatedContext(confirmationCode: string, credential: Credential) {
    this.loginService.mfa(confirmationCode, "TOTP", credential)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: loginResponse => {
          this.authService.getUserContextForSuccessfulLogin(loginResponse);
          this.dialogRef.close(true);
        },
        error: err => this.onError(err)
      });
  }

  verifyCodeInAuthenticatedContext(confirmationCode: string) {
    this.myAccountService.verifyTotpCode(confirmationCode)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: data => this.onSuccess(data),
        error: err => this.onError(err)
      });
  }

  onSuccess(data: TotpCodeVerification) {
    if (data.success) {
      console.log('success');
      this.dialogRef.close(true);
    } else {
      this.isCodeInvalid.set(true);
    }
  }

  onError(err: any) {
    console.log(err);
    this.isCodeInvalid.set(true);
  }

}
