import {ChangeDetectionStrategy, Component, DestroyRef, inject, model, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TotpActivationComponent} from "./totp-activation/totp-activation.component";
import {MyAccountService} from "../../../../service/my-account/my-account.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

import {
  TotpCodeVerificationComponent
} from "../../../../component/security/totp-code-verification/totp-code-verification.component";
import {AuthService} from "../../../../service/auth/auth.service";
import {Role} from "../../../../service/auth/role";
import {DisableIfNoRoleExistsDirective} from "../../../../directive/disable-if-no-role-exists.directive";
import {ConfirmationDialogComponent} from "../../../../component/confirmation-dialog/confirmation-dialog.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-my-totp-settings',
    imports: [
    DisableIfNoRoleExistsDirective,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule
],
    templateUrl: './my-totp-settings.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTotpSettingsComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  readonly dialog = inject(MatDialog);
  private readonly myAccountService = inject(MyAccountService);
  protected authService = inject(AuthService);

  isTotpActive = model<boolean>(false);
  isLoadingCompleted = model<boolean>(false);

  setupTotp() {
    const dialogRef = this.dialog.open(TotpActivationComponent, {disableClose: true});
    dialogRef.afterClosed().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(_ => {
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
