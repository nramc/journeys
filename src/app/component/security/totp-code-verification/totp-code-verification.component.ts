import {ChangeDetectionStrategy, Component, DestroyRef, inject, model} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {NgIf} from "@angular/common";
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
        NgIf,
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

  confirmCode(confirmationCode: HTMLInputElement) {
    this.isCodeInvalid.set(false);
    if (confirmationCode.validity.valid) {
      if (this.credential) {
        this.verifyCodeInUnauthenticatedContext(confirmationCode.value, this.credential);
      } else {
        this.verifyCodeInAuthenticatedContext(confirmationCode.value);
      }
    } else {
      this.isCodeInvalid.set(true);
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
      this.dialogRef.close(true);
    } else {
      this.isCodeInvalid.set(true);
    }
  }

  onError(err: Error) {
    console.log(err);
    this.isCodeInvalid.set(true);
  }

}
