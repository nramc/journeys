import {Component, computed, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {MyAccountService} from "../../../service/my-account/my-account.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AppUser} from "../../../model/account/app-user";
import {NgForOf, NgIf} from "@angular/common";
import {MY_PROFILE_PAGE_INFO} from "../../../model/page.info.model";
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {FeedbackMessageComponent} from "../../../component/feedback-message/feedback-message.component";
import {FeedbackMessage} from "../../../component/feedback-message/feedback-message";
import {DisableIfNoRoleExistsDirective} from "../../../directive/disable-if-no-role-exists.directive";
import {AuthService} from "../../../service/auth/auth.service";
import {Role} from "../../../service/auth/role";
import {HasWriteAccessDirective} from "../../../directive/has-write-access.directive";

@Component({
  selector: 'app-my-profile-page',
  standalone: true,
  imports: [
    PageHeaderComponent,
    NgIf,
    FormsModule,
    NgForOf,
    FeedbackMessageComponent,
    DisableIfNoRoleExistsDirective,
    HasWriteAccessDirective
  ],
  templateUrl: './my-profile-page.component.html',
  styleUrl: './my-profile-page.component.scss'
})
export class MyProfilePageComponent implements OnInit {
  protected readonly MY_PROFILE_PAGE_INFO = MY_PROFILE_PAGE_INFO;
  private destroyRef = inject(DestroyRef);

  feedbackMessage = signal<FeedbackMessage>({});

  mydata: AppUser | undefined;
  hasAccess = computed(() => this.authService.hasRole([Role.AUTHENTICATED_USER]));

  constructor(
    private myAccountService: MyAccountService,
    private router: Router,
    protected authService: AuthService) {
  }

  ngOnInit(): void {
    this.myAccountService.getProfileData()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: data => this.mydata = data,
        error: err => console.error(err)
      })
  }

  save(profileForm: NgForm) {
    if (profileForm.valid && profileForm.dirty) {
      this.myAccountService.saveProfileData(this.mydata!).subscribe(
        {next: _ => this.onSuccessCallback(), error: _ => this.onErrorCallback()}
      );
    }
  }

  onSuccessCallback() {
    this.feedbackMessage.set({success: 'Profile data saved successfully'});
  }

  onErrorCallback() {
    this.feedbackMessage.set({error: 'Update failed. Please check data.'});
  }

  cancel() {
    this.router.navigate(['/']).then(console.log);
  }

  protected readonly Role = Role;
}
