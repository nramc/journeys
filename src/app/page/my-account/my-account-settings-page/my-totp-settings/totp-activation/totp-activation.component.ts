import {Component, DestroyRef, inject, model, OnInit, signal} from '@angular/core';
import {MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {MyAccountService} from "../../../../../service/my-account/my-account.service";
import {QrCodeData} from "../../../../../model/account/qr-code-data";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {FormsModule} from "@angular/forms";
import {TotpActivation} from "../../../../../service/my-account/totp-activation";
import {FeedbackMessageComponent} from "../../../../../component/feedback-message/feedback-message.component";
import {FeedbackMessage} from "../../../../../component/feedback-message/feedback-message";

@Component({
  selector: 'app-totp-activation',
  standalone: true,
  imports: [
    MatDialogClose,
    FormsModule,
    FeedbackMessageComponent
  ],
  templateUrl: './totp-activation.component.html',
  styleUrl: './totp-activation.component.scss'
})
export class TotpActivationComponent implements OnInit {
  feedbackMessage = signal<FeedbackMessage>({});
  private destroyRef = inject(DestroyRef);
  dialogRef: MatDialogRef<TotpActivationComponent> = inject(MatDialogRef<TotpActivationComponent>);
  private myAccountService = inject(MyAccountService);
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
      let activationRequest: TotpActivation = {secretKey: this.qrCodeData()!.secretKey, code: totpCode.value};
      this.myAccountService.activateTotp(activationRequest)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: _ => this.onSuccess(),
          error: err => this.feedbackMessage.set({error: 'Code Invalid'})
        });
    }
  }

  onSuccess() {
    console.log('2FA TOTP activated');
    this.feedbackMessage.set({success: '2FA activated successfully'})
    this.dialogRef.close(true);
  }


}
