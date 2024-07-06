import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HasWriteAccessDirective} from "../../../../directive/has-write-access.directive";
import {DisableIfNoRoleExistsDirective} from "../../../../directive/disable-if-no-role-exists.directive";
import {Role} from "../../../../service/auth/role";

@Component({
  selector: 'my-email-address-settings',
  standalone: true,
  imports: [
    FormsModule,
    HasWriteAccessDirective,
    DisableIfNoRoleExistsDirective
  ],
  templateUrl: './my-email-address-settings.component.html',
  styleUrl: './my-email-address-settings.component.scss'
})
export class MyEmailAddressSettingsComponent {

  editMode = false;
  isVerified = false;
  emailAddress = 'ramachandrannellai@gmail.com';

  enableEdit() {
    this.editMode = true;
  }

  protected readonly Role = Role;

  save(emailAddressElement: HTMLInputElement) {
    if (emailAddressElement.validity.valid && this.editMode) {
      console.log('email valid');
      this.editMode = false;
    }
  }
}
