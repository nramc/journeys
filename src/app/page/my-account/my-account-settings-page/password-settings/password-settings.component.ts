import {ChangeDetectionStrategy, Component, DestroyRef, inject, model, OnInit} from '@angular/core';
import {DatePipe, NgIf} from "@angular/common";
import {MyAccountService} from "../../../../service/my-account/my-account.service";
import {AppUser} from "../../../../model/account/app-user";
import {Role} from "../../../../service/auth/role";
import {DisableIfNoRoleExistsDirective} from "../../../../directive/disable-if-no-role-exists.directive";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {FormsModule, NgModel} from "@angular/forms";
import {MatTooltip} from "@angular/material/tooltip";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-my-password-settings',
  standalone: true,
  imports: [
    NgIf,
    DisableIfNoRoleExistsDirective,
    DatePipe,
    FormsModule,
    MatTooltip,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './password-settings.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordSettingsComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private myAccountService = inject(MyAccountService);

  userData = model<AppUser>();
  isErrorOccurred = model(true);
  editMode = model(false);

  protected readonly Role = Role;

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
          this.editMode.set(false);
        },
        error: err => console.log(err)
      });
  }

  savePassword(newPassword: NgModel) {
    if (newPassword.valid) {
      this.myAccountService.changePassword(newPassword.value)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: _ => this.fetchCurrentUserData(),
          error: err => {
            console.log(err);
            this.isErrorOccurred.set(true);
          }
        });
    } else {
      this.isErrorOccurred.set(true);
    }
  }

  isPasswordComplaint() {
    if (this.userData()?.passwordChangedAt) {
      const numberOfMonthsSincePasswordChanged = (new Date().getFullYear())
        - (new Date(Date.parse(this.userData()!.passwordChangedAt)).getFullYear()) * 12;
      return numberOfMonthsSincePasswordChanged <= 3
    }
    return false;
  }
}
