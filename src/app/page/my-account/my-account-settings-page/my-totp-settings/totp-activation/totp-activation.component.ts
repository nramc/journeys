import {Component, DestroyRef, inject, model, OnInit} from '@angular/core';
import {MatDialogClose} from "@angular/material/dialog";
import {MyAccountService} from "../../../../../service/my-account/my-account.service";
import {QrCodeData} from "../../../../../model/account/qr-code-data";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-totp-activation',
  standalone: true,
  imports: [
    MatDialogClose,
    FormsModule
  ],
  templateUrl: './totp-activation.component.html',
  styleUrl: './totp-activation.component.scss'
})
export class TotpActivationComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
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
    }
  }


}
