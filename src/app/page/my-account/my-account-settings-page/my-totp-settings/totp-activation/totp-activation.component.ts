import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MyAccountService} from "../../../../../service/my-account/my-account.service";
import {takeUntilDestroyed, toSignal} from "@angular/core/rxjs-interop";
import {FormsModule, NgModel} from "@angular/forms";
import {TotpActivation} from "../../../../../service/my-account/totp-activation";
import {NotificationService} from "../../../../../service/common/notification.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
    selector: 'app-totp-activation',
    imports: [
    FormsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
],
    templateUrl: './totp-activation.component.html',
    styleUrl: './totp-activation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotpActivationComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialogRef: MatDialogRef<TotpActivationComponent> = inject(MatDialogRef<TotpActivationComponent>);
  private readonly myAccountService = inject(MyAccountService);
  private readonly notificationService = inject(NotificationService);

  qrCodeData = toSignal(this.myAccountService.generateNewQRCode());

  activate(totpCode: NgModel) {
    if (totpCode.valid && this.qrCodeData()?.secretKey) {
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


  cancelActivation() {
    this.dialogRef.close(false);
  }
}
