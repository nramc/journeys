import {Component} from '@angular/core';
import {MY_SECURITY_SETTINGS_PAGE_INFO} from "../../../model/page.info.model";
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {MyEmailAddressSettingsComponent} from "./my-email-address-settings/my-email-address-settings.component";

@Component({
  selector: 'app-my-account-settings-page',
  standalone: true,
  imports: [
    PageHeaderComponent,
    MyEmailAddressSettingsComponent
  ],
  templateUrl: './my-account-settings-page.component.html',
  styleUrl: './my-account-settings-page.component.scss'
})
export class MyAccountSettingsPageComponent {
  protected readonly MY_SECURITY_SETTINGS_PAGE_INFO = MY_SECURITY_SETTINGS_PAGE_INFO;

}