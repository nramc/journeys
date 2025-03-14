import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MY_ACCOUNT_PAGE_INFO} from "../../model/page.info.model";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";

@Component({
    selector: 'app-my-account-page',
    imports: [
        PageHeaderComponent
    ],
    templateUrl: './my-account-page.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyAccountPageComponent {

  protected readonly MY_ACCOUNT_PAGE_INFO = MY_ACCOUNT_PAGE_INFO;
}
