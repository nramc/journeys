import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {MyAccountService} from "../../../service/my-account/my-account.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AppUser} from "../../../model/account/app-user";
import {NgForOf, NgIf} from "@angular/common";
import {MY_PROFILE_PAGE_INFO} from "../../../model/page.info.model";
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {FeedbackMessageComponent} from "../../../component/feedback-message/feedback-message.component";

@Component({
  selector: 'app-my-profile-page',
  standalone: true,
  imports: [
    PageHeaderComponent,
    NgIf,
    FormsModule,
    NgForOf,
    FeedbackMessageComponent
  ],
  templateUrl: './my-profile-page.component.html',
  styleUrl: './my-profile-page.component.scss'
})
export class MyProfilePageComponent implements OnInit {
  protected readonly MY_PROFILE_PAGE_INFO = MY_PROFILE_PAGE_INFO;
  private destroyRef = inject(DestroyRef);

  successMessage: string = '';
  errorMessage: string = '';

  mydata: AppUser | undefined;

  constructor(
    private myAccountService: MyAccountService,
    private router: Router) {
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
        {next: data => this.onSuccessCallback(), error: err => this.onErrorCallback()}
      );
    }
  }

  onSuccessCallback() {
    this.successMessage = 'Profile data saved successfully';
  }

  onErrorCallback() {
    this.errorMessage = 'Update failed. Please check data.';
  }

  cancel() {
    this.router.navigate(['/']).then(console.log);
  }
}
