import {Component} from '@angular/core';
import {MY_ACCOUNT_PAGE_INFO} from "../../model/page.info.model";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";

@Component({
  selector: 'app-my-account-page',
  standalone: true,
  imports: [
    PageHeaderComponent
  ],
  templateUrl: './my-account-page.component.html',
  styles: []
})
export class MyAccountPageComponent {

  protected readonly MY_ACCOUNT_PAGE_INFO = MY_ACCOUNT_PAGE_INFO;
}
