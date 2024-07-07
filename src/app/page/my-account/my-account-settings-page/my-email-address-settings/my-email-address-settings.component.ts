import {Component, DestroyRef, inject, model, ModelSignal, OnInit} from '@angular/core';
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
  emailAddressData: ModelSignal<EmailSecurityAttribute> = model(new EmailSecurityAttribute());
  editModeToggle = model<boolean>(false);

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
    console.log('received data:', data)
    this.emailAddressData.set(data);
    this.editModeToggle.set(editMode);
  }

  private onError(err: any) {
    console.log(err);
  }

  enableEdit() {
    console.log("edit model enabled")
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

    dialogRef.afterClosed().subscribe(result => {
      this.fetchSecurityEmailAddress();
    });
  }

}
