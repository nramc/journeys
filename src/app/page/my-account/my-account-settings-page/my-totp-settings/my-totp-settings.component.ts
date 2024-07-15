import {Component, DestroyRef, inject, model, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TotpActivationComponent} from "./totp-activation/totp-activation.component";
import {MyAccountService} from "../../../../service/my-account/my-account.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {NgIf} from "@angular/common";
import {
  TotpCodeVerificationComponent
} from "../../../../component/security/totp-code-verification/totp-code-verification.component";

@Component({
  selector: 'my-totp-settings',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './my-totp-settings.component.html',
  styleUrl: './my-totp-settings.component.scss'
})
export class MyTotpSettingsComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  readonly dialog = inject(MatDialog);
  private myAccountService = inject(MyAccountService);

  isTotpActive = model<boolean>(false);

  setupTotp() {
    const dialogRef = this.dialog.open(TotpActivationComponent, {disableClose: true});
    dialogRef.afterClosed().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        console.log('Result:', result);
      });
  }

  ngOnInit(): void {
    this.myAccountService.getTotpStatus().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: data => {
          console.log(data);
          this.isTotpActive.set(data.active);
        },
        error: err => console.log(err)
      });
  }

  testCode() {
    const dialogRef = this.dialog.open(TotpCodeVerificationComponent, {disableClose: true});
    dialogRef.afterClosed().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        console.log('Result:', result);
      });
  }
}
