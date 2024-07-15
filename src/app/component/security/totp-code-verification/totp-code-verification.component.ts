import {Component, DestroyRef, inject, model} from '@angular/core';
import {MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {NgIf} from "@angular/common";
import {MyAccountService} from "../../../service/my-account/my-account.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {TotpCodeVerification} from "../../../service/my-account/totp-code-verification";

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
  dialogRef: MatDialogRef<TotpCodeVerificationComponent> = inject(MatDialogRef<TotpCodeVerificationComponent>);

  isCodeInvalid = model<boolean>(false);

  confirmCode(confirmationCode: HTMLInputElement) {
    if (confirmationCode.validity.valid) {
      this.myAccountService.verifyTotpCode(confirmationCode.value)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: data => this.onSuccess(data),
          error: err => this.onError(err)
        });
    }
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
