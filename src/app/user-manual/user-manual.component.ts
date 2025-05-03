import {Component} from '@angular/core';
import {USER_MANUAL_PAGE_INFO} from "../model/page.info.model";
import {PageHeaderComponent} from "../component/page-header/page-header.component";
import {ManualGettingStartedComponent} from "./manual-getting-started/manual-getting-started.component";
import {ManualUserOnboardingComponent} from "./manual-user-onboarding/manual-user-onboarding.component";
import {ManualJourneyManagerComponent} from "./manual-journey-manager/manual-journey-manager.component";
import {ManualIntroductionComponent} from "./manual-introduction/manual-introduction.component";
import {ManualToolsComponent} from "./manual-tools/manual-tools.component";
import {ManualStatisticsComponent} from "./manual-statistics/manual-statistics.component";


@Component({
  selector: 'app-user-manual-overview',
  imports: [
    PageHeaderComponent,
    ManualGettingStartedComponent,
    ManualUserOnboardingComponent,
    ManualJourneyManagerComponent,
    ManualIntroductionComponent,
    ManualToolsComponent,
    ManualStatisticsComponent
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
