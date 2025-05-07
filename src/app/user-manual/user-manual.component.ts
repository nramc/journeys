import {Component, ElementRef, viewChild} from '@angular/core';
import {USER_MANUAL_PAGE_INFO} from "../model/page.info.model";
import {PageHeaderComponent} from "../component/page-header/page-header.component";
import {ManualGettingStartedComponent} from "./manual-getting-started/manual-getting-started.component";
import {ManualUserOnboardingComponent} from "./manual-user-onboarding/manual-user-onboarding.component";
import {ManualJourneyManagerComponent} from "./manual-journey-manager/manual-journey-manager.component";
import {ManualIntroductionComponent} from "./manual-introduction/manual-introduction.component";
import {ManualToolsComponent} from "./manual-tools/manual-tools.component";
import {ManualStatisticsComponent} from "./manual-statistics/manual-statistics.component";
import {ManualGalleryComponent} from "./manual-gallery/manual-gallery.component";
import {ManualDashboardComponent} from "./manual-dashboard/manual-dashboard.component";
import {ManualDailyInspirationComponent} from "./manual-daily-inspiration/manual-daily-inspiration.component";
import {ScrollToTopComponent} from "../component/scroll-to-top/scroll-to-top.component";
import {ManualMyAccountComponent} from "./manual-my-account/manual-my-account.component";


@Component({
  selector: 'app-user-manual-overview',
  imports: [
    PageHeaderComponent,
    ManualGettingStartedComponent,
    ManualUserOnboardingComponent,
    ManualJourneyManagerComponent,
    ManualIntroductionComponent,
    ManualToolsComponent,
    ManualStatisticsComponent,
    ManualGalleryComponent,
    ManualDashboardComponent,
    ManualDailyInspirationComponent,
    ScrollToTopComponent,
    ManualMyAccountComponent
  ],
  templateUrl: './user-manual.component.html',
  styleUrl: './user-manual.component.scss',
})
export class UserManualComponent {
  protected readonly USER_MANUAL_PAGE_INFO = USER_MANUAL_PAGE_INFO;
  imageDialog = viewChild.required<ElementRef<HTMLDialogElement>>('imageDialog');

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  }

  showDialog(imagUrl: string) {
    const dialogElement = this.imageDialog().nativeElement;
    const imageElement = dialogElement.querySelector('img') as HTMLImageElement;
    imageElement.src = imagUrl;
    dialogElement.showModal();
  }

}
