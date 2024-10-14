import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MY_SECURITY_SETTINGS_PAGE_INFO} from "../../../model/page.info.model";
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {MyTotpSettingsComponent} from "./my-totp-settings/my-totp-settings.component";
import {MfaSettingsComponent} from "./mfa-settings/mfa-settings.component";
import {PasswordSettingsComponent} from "./password-settings/password-settings.component";

@Component({
  selector: 'app-my-account-settings-page',
  standalone: true,
  imports: [
    PageHeaderComponent,
    MyTotpSettingsComponent,
    MfaSettingsComponent,
    PasswordSettingsComponent
  ],
  templateUrl: './my-account-settings-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyAccountSettingsPageComponent {
  protected readonly MY_SECURITY_SETTINGS_PAGE_INFO = MY_SECURITY_SETTINGS_PAGE_INFO;

}
