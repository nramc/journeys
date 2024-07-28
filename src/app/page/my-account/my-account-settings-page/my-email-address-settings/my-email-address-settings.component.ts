import {Component, DestroyRef, inject, model, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HasWriteAccessDirective} from "../../../../directive/has-write-access.directive";
import {DisableIfNoRoleExistsDirective} from "../../../../directive/disable-if-no-role-exists.directive";
import {Role} from "../../../../service/auth/role";
import {MyAccountService} from "../../../../service/my-account/my-account.service";
import {EmailSecurityAttribute} from "../../../../model/account/email-security-attribute";
import {JsonPipe, NgIf} from "@angular/common";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatDialog} from "@angular/material/dialog";
import {
  EmailCodeVerificationComponent
} from "../../../../component/security/email-code-verification/email-code-verification.component";

@Component({
  selector: 'my-email-address-settings',
  standalone: true,
  imports: [
    FormsModule,
    HasWriteAccessDirective,
    DisableIfNoRoleExistsDirective,
    NgIf,
    JsonPipe
  ],
  templateUrl: './my-email-address-settings.component.html',
  styleUrl: './my-email-address-settings.component.scss'
})
export class MyEmailAddressSettingsComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private myAccountService = inject(MyAccountService)
  readonly dialog = inject(MatDialog);

  protected readonly Role = Role;
  emailAddressData = model<EmailSecurityAttribute>(new EmailSecurityAttribute());
  editModeToggle = model<boolean>(false);
  isLoadingCompleted = model(false);

  ngOnInit(): void {
    this.fetchSecurityEmailAddress();
  }

  private fetchSecurityEmailAddress() {
    this.myAccountService.getSecurityEmailAddress()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: data => this.onSuccess(data),
        error: err => this.onError(err)
      });
  }

  private onSuccess(data: EmailSecurityAttribute, editMode: boolean = false) {
    this.emailAddressData.set(data || new EmailSecurityAttribute());
    this.editModeToggle.set(editMode);
    this.isLoadingCompleted.set(true);
  }

  private onError(err: any) {
    console.log(err);
    this.isLoadingCompleted.set(true);
  }

  enableEdit() {
    this.editModeToggle.set(true);
  }

  save(emailAddressElement: HTMLInputElement) {
    if (emailAddressElement.validity.valid && this.editModeToggle()) {
      this.myAccountService.saveSecurityEmailAddress(emailAddressElement.value)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: data => this.onSuccess(data),
          error: err => this.onError(err)
        });
    }
  }

  verifyEmailAddress() {
    const dialogRef = this.dialog.open(EmailCodeVerificationComponent, {disableClose: true});

    dialogRef.afterClosed().subscribe(_ => {
      this.fetchSecurityEmailAddress();
    });
  }

}
