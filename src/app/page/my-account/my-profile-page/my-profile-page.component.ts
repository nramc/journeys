import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {MyAccountService} from "../../../service/my-account/my-account.service";
import {toSignal} from "@angular/core/rxjs-interop";

import {MY_PROFILE_PAGE_INFO} from "../../../model/page.info.model";
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth/auth.service";
import {Role} from "../../../service/auth/role";
import {NotificationService} from "../../../service/common/notification.service";
import {HasWriteAccessDirective} from "../../../directive/has-write-access.directive";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AppUser} from "../../../model/account/app-user";

@Component({
    selector: 'app-my-profile-page',
    imports: [
    PageHeaderComponent,
    FormsModule,
    HasWriteAccessDirective,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
],
    templateUrl: './my-profile-page.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyProfilePageComponent {
  protected readonly MY_PROFILE_PAGE_INFO = MY_PROFILE_PAGE_INFO;
  protected readonly Role = Role;

  private readonly notificationService = inject(NotificationService);
  private readonly myAccountService = inject(MyAccountService);
  private readonly router = inject(Router);
  protected readonly authService = inject(AuthService);

  myProfileData = toSignal(this.myAccountService.getProfileData(), {
    initialValue: new AppUser('', '', '', '', false, [], false)
  });
  hasAccess = computed(() => this.authService.hasAnyRole([Role.AUTHENTICATED_USER]));

  save(profileForm: NgForm) {
    if (profileForm.valid && profileForm.dirty) {
      this.myAccountService.saveProfileData(this.myProfileData()).subscribe(
        {next: _ => this.onSuccessCallback(), error: _ => this.onErrorCallback()}
      );
    }
  }

  onSuccessCallback() {
    this.notificationService.showSuccess('Profile data saved successfully');
  }

  onErrorCallback() {
    this.notificationService.showError('Update failed. Please check data.');
  }

  cancel() {
    this.router.navigate(['/']).then(console.log);
  }

}
