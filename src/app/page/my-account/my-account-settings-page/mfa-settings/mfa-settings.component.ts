import {Component, DestroyRef, inject, model, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {DisableIfNoRoleExistsDirective} from "../../../../directive/disable-if-no-role-exists.directive";
import {Role} from "../../../../service/auth/role";
import {MatDialog} from "@angular/material/dialog";
import {MyAccountService} from "../../../../service/my-account/my-account.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AppUser} from "../../../../model/account/app-user";
import {ConfirmationDialogComponent} from "../../../../component/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-mfa-settings',
  standalone: true,
  imports: [
    NgIf,
    DisableIfNoRoleExistsDirective
  ],
  templateUrl: './mfa-settings.component.html',
  styleUrl: './mfa-settings.component.scss'
})
export class MfaSettingsComponent implements OnInit {
  protected readonly Role = Role;
  private destroyRef = inject(DestroyRef);
  readonly dialog = inject(MatDialog);
  private myAccountService = inject(MyAccountService);

  userData = model<AppUser>();
  isErrorOccurred = model(true);


  ngOnInit(): void {
    this.fetchCurrentUserData();
  }

  private fetchCurrentUserData() {
    this.myAccountService.getProfileData()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: data => {
          this.userData.set(data);
          this.isErrorOccurred.set(false);
        },
        error: err => console.log(err)
      });
  }

  enableMfa() {
    this.changeMfa(true);
  }

  confirmMfaDeactivation() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {disableClose: true});
    dialogRef.afterClosed().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        if (result === true) {
          this.changeMfa(false);
        }
      });
  }

  changeMfa(status: boolean) {
    this.myAccountService.changeMfaStatus(status)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: _ => this.fetchCurrentUserData(),
        error: err => {
          console.log(err);
          this.isErrorOccurred.set(true);
        }
      });
  }
}
