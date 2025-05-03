import {Component, signal} from '@angular/core';
import {USER_MANUAL_PAGE_INFO} from "../model/page.info.model";
import {PageHeaderComponent} from "../component/page-header/page-header.component";


@Component({
  selector: 'app-user-manual-overview',
  imports: [
    PageHeaderComponent
  ],
  templateUrl: './user-manual.component.html',
  styleUrl: './user-manual.component.scss',
})
export class UserManualComponent {
  protected readonly USER_MANUAL_PAGE_INFO = USER_MANUAL_PAGE_INFO;
  showScrollTop = signal(false);

  onWindowScroll() {
    console.log('scrolling');
  }


  scrollTo(id: string): void {
    console.log(id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }


  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
