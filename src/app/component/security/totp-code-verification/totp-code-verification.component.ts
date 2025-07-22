import {ChangeDetectionStrategy, Component, DestroyRef, inject, model} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from "@angular/material/dialog";

import {MyAccountService} from "../../../service/my-account/my-account.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {TotpCodeVerification} from "../../../service/my-account/totp-code-verification";
import {Credential, LoginService} from "../../../service/auth/login.service";
import {AuthService} from "../../../service/auth/auth.service";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-totp-code-verification',
    imports: [
    MatDialogClose,
    MatCardModule,
    MatFormFieldModule,
    MatInput,
    MatButton,
    FormsModule
],
    templateUrl: './totp-code-verification.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotpCodeVerificationComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly myAccountService = inject(MyAccountService);
  private readonly loginService = inject(LoginService);
  private readonly authService = inject(AuthService);
  dialogRef: MatDialogRef<TotpCodeVerificationComponent> = inject(MatDialogRef<TotpCodeVerificationComponent>);
  credential: Credential = inject(MAT_DIALOG_DATA);

  isCodeInvalid = model<boolean>(false);

  confirmCode(confirmationCode: HTMLInputElement, confirmButton: MatButton) {
    this.isCodeInvalid.set(false);
    if (confirmationCode.validity.valid) {
      confirmButton.disabled = true;
      if (this.credential) {
        this.verifyCodeInUnauthenticatedContext(confirmationCode.value, this.credential, confirmButton);
      } else {
        this.verifyCodeInAuthenticatedContext(confirmationCode.value, confirmButton);
      }
    } else {
      this.isCodeInvalid.set(true);
    }
  }

  verifyCodeInUnauthenticatedContext(confirmationCode: string, credential: Credential, confirmButton: MatButton) {
    this.loginService.mfa(confirmationCode, "TOTP", credential)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: loginResponse => {
          this.authService.getUserContextForSuccessfulLogin(loginResponse);
          this.dialogRef.close(true);
        },
        error: err => this.onError(err, confirmButton)
      });
  }

  verifyCodeInAuthenticatedContext(confirmationCode: string, confirmButton: MatButton) {
    this.myAccountService.verifyTotpCode(confirmationCode)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: data => this.onSuccess(data),
        error: err => this.onError(err, confirmButton)
      });
  }

  onSuccess(data: TotpCodeVerification) {
    if (data.success) {
      this.dialogRef.close(true);
    } else {
      this.isCodeInvalid.set(true);
    }
  }

  onError(err: Error, confirmButton: MatButton) {
    confirmButton.disabled = false;
    console.log(err);
    this.isCodeInvalid.set(true);
  }

}
