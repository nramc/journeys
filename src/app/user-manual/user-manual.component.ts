import {Component, computed, ElementRef, inject, signal, viewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  protected readonly manualSections = [
    {id: 'introduction', label: 'Introduction', description: 'Discover what Journey can help you create and remember.'},
    {id: 'getting-started', label: 'Getting Started', description: 'Take your first steps as a guest or registered user.'},
    {id: 'user-onboarding', label: 'User Onboarding', description: 'Set up your account and learn the essential features.'},
    {id: 'account-recovery', label: 'Account Recovery', description: 'Regain access securely with a one-time recovery link.'},
    {id: 'journey-manager', label: 'Journey Manager', description: 'Create, edit, organize, and share your journeys.'},
    {id: 'dashboard', label: 'Dashboard', description: 'Get a quick overview of your recent journey activity.'},
    {id: 'gallery', label: 'Gallery', description: 'Browse your travel memories in a visual collection.'},
    {id: 'statistics', label: 'Statistics', description: 'Understand your journeys by year, place, and category.'},
    {id: 'my-account', label: 'My Account', description: 'Manage your profile, preferences, and security settings.'},
    {id: 'tools', label: 'Tools', description: 'Explore utilities that make planning and remembering easier.'},
    {id: 'daily-inspiration', label: 'Daily Inspiration', description: 'Reconnect with meaningful memories and ideas each day.'}
  ] as const;

  protected readonly activeSectionIndex = signal(0);
  protected readonly activeSection = computed(() => this.manualSections[this.activeSectionIndex()]);
  imageDialog = viewChild.required<ElementRef<HTMLDialogElement>>('imageDialog');
  protected readonly selectedImage = signal('');

  constructor() {
    const fragment = this.route.snapshot.fragment;
    const sectionIndex = this.manualSections.findIndex(section => section.id === fragment);
    if (sectionIndex >= 0) {
      this.activeSectionIndex.set(sectionIndex);
    }
  }

  navigateToSection(id: string, event: Event): void {
    event.preventDefault();
    const sectionIndex = this.manualSections.findIndex(section => section.id === id);
    if (sectionIndex < 0) {
      return;
    }

    this.activeSectionIndex.set(sectionIndex);
    (event.currentTarget as HTMLElement).closest('details')?.removeAttribute('open');
    this.router.navigate([], {fragment: id}).then(() => {
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'}));
    });
  }

  navigateToAdjacentSection(offset: -1 | 1): void {
    const nextIndex = this.activeSectionIndex() + offset;
    if (nextIndex < 0 || nextIndex >= this.manualSections.length) {
      return;
    }

    const nextSection = this.manualSections[nextIndex];
    this.activeSectionIndex.set(nextIndex);
    this.router.navigate([], {fragment: nextSection.id}).then(() => {
      requestAnimationFrame(() => document.getElementById(nextSection.id)?.scrollIntoView({behavior: 'smooth', block: 'start'}));
    });
  }

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
