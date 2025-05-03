import {Component} from '@angular/core';
import {USER_MANUAL_PAGE_INFO} from "../model/page.info.model";
import {PageHeaderComponent} from "../component/page-header/page-header.component";


@Component({
  selector: 'app-user-manual-overview',
  imports: [
    PageHeaderComponent
  ],
  templateUrl: './user-manual.component.html',
  styles: []
})
export class UserManualComponent {
  protected readonly USER_MANUAL_PAGE_INFO = USER_MANUAL_PAGE_INFO;

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  }

}
