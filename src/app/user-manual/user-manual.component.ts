import {Component, ElementRef, signal, viewChild} from '@angular/core';
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
import {ManualMyAccountComponent} from "./manual-my-account/manual-my-account.component";
import {ManualAccountRecoveryComponent} from "./manual-account-recovery/manual-account-recovery.component";


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
    ManualMyAccountComponent,
    ManualAccountRecoveryComponent
  ],
  templateUrl: './user-manual.component.html',
  styleUrl: './user-manual.component.scss',
})
export class UserManualComponent {
  protected readonly USER_MANUAL_PAGE_INFO = USER_MANUAL_PAGE_INFO;
  protected readonly manualSections = [
    {id: 'introduction', label: 'Introduction'},
    {id: 'getting-started', label: 'Getting Started'},
    {id: 'user-onboarding', label: 'User Onboarding'},
    {id: 'account-recovery', label: 'Account Recovery'},
    {id: 'journey-manager', label: 'Journey Manager'},
    {id: 'dashboard', label: 'Dashboard'},
    {id: 'gallery', label: 'Gallery'},
    {id: 'statistics', label: 'Statistics'},
    {id: 'my-account', label: 'My Account'},
    {id: 'tools', label: 'Tools'},
    {id: 'daily-inspiration', label: 'Daily Inspiration'}
  ] as const;

  imageDialog = viewChild.required<ElementRef<HTMLDialogElement>>('imageDialog');
  protected readonly selectedImage = signal('');

  showDialog(imageUrl: string): void {
    this.selectedImage.set(imageUrl);
    const dialogElement = this.imageDialog().nativeElement;
    dialogElement.showModal();
    dialogElement.querySelector<HTMLButtonElement>('button')?.focus();
  }

  closeDialog(): void {
    this.imageDialog().nativeElement.close();
  }
}
