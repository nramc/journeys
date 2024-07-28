import {Component, DestroyRef, inject, model, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TotpActivationComponent} from "./totp-activation/totp-activation.component";
import {MyAccountService} from "../../../../service/my-account/my-account.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {NgIf} from "@angular/common";
import {
  TotpCodeVerificationComponent
} from "../../../../component/security/totp-code-verification/totp-code-verification.component";
import {AuthService} from "../../../../service/auth/auth.service";
import {Role} from "../../../../service/auth/role";
import {DisableIfNoRoleExistsDirective} from "../../../../directive/disable-if-no-role-exists.directive";
import {ConfirmationDialogComponent} from "../../../../component/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'my-totp-settings',
  standalone: true,
  imports: [
    NgIf,
    DisableIfNoRoleExistsDirective
  ],
  templateUrl: './my-totp-settings.component.html',
  styleUrl: './my-totp-settings.component.scss'
})
export class MyTotpSettingsComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  readonly dialog = inject(MatDialog);
  private myAccountService = inject(MyAccountService);
  protected authService = inject(AuthService);

  isTotpActive = model<boolean>(false);
  isLoadingCompleted = model<boolean>(false);

  setupTotp() {
    const dialogRef = this.dialog.open(TotpActivationComponent, {disableClose: true});
    dialogRef.afterClosed().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        this.getCurrentTotpStatus();
      });
  }

  ngOnInit(): void {
    this.getCurrentTotpStatus();
  }

  getCurrentTotpStatus() {
    this.myAccountService.getTotpStatus().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: data => {
          this.isTotpActive.set(data.active);
          this.isLoadingCompleted.set(true);
        },
        error: err => {
          console.log(err);
          this.isLoadingCompleted.set(true);
        }
      });
  }

  testCode() {
    const dialogRef = this.dialog.open(TotpCodeVerificationComponent, {disableClose: true});
    dialogRef.afterClosed().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        console.log('Result:', result);
      });
  }

  confirmTotpDeactivation() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {disableClose: true});
    dialogRef.afterClosed().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        if (result === true) {
          this.deactivateTotp();
        }
      });
  }

  deactivateTotp() {
    this.myAccountService.deactivateTotp()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: _ => this.getCurrentTotpStatus(),
        error: err => console.log(err)
      });
  }

  protected readonly Role = Role;
}
