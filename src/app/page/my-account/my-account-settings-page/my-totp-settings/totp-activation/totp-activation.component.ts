import {ChangeDetectionStrategy, Component, DestroyRef, inject, model, OnInit} from '@angular/core';
import {MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {MyAccountService} from "../../../../../service/my-account/my-account.service";
import {QrCodeData} from "../../../../../model/account/qr-code-data";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {FormsModule} from "@angular/forms";
import {TotpActivation} from "../../../../../service/my-account/totp-activation";
import {NotificationService} from "../../../../../service/common/notification.service";

@Component({
  selector: 'app-totp-activation',
  standalone: true,
  imports: [
    MatDialogClose,
    FormsModule
  ],
  templateUrl: './totp-activation.component.html',
  styleUrl: './totp-activation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotpActivationComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialogRef: MatDialogRef<TotpActivationComponent> = inject(MatDialogRef<TotpActivationComponent>);
  private readonly myAccountService = inject(MyAccountService);
  private readonly notificationService = inject(NotificationService);

  qrCodeData = model<QrCodeData>();

  ngOnInit(): void {
    this.myAccountService.generateNewQRCode()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: data => this.qrCodeData.set(data),
        error: err => console.log(err)
      });
  }

  activate(totpCode: HTMLInputElement) {
    if (totpCode.validity.valid && this.qrCodeData()?.secretKey) {
      // activate totp now
      const activationRequest: TotpActivation = {secretKey: this.qrCodeData()!.secretKey, code: totpCode.value};
      this.myAccountService.activateTotp(activationRequest)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: _ => this.onSuccess(),
          error: _ => this.notificationService.showError('Code Invalid')
        });
    }
  }

  onSuccess() {
    this.notificationService.showSuccess('2FA activated successfully');
    this.dialogRef.close(true);
  }


}
