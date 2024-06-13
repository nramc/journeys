import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {MyAccountService} from "../../../service/my-account/my-account.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AppUser} from "../../../model/account/app-user";
import {JsonPipe, NgIf} from "@angular/common";
import {MY_ACCOUNT_PAGE_INFO} from "../../../model/page.info.model";
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-my-profile-page',
  standalone: true,
  imports: [
    JsonPipe,
    PageHeaderComponent,
    NgIf,
    FormsModule
  ],
  templateUrl: './my-profile-page.component.html',
  styleUrl: './my-profile-page.component.scss'
})
export class MyProfilePageComponent implements OnInit {
  protected readonly MY_ACCOUNT_PAGE_INFO = MY_ACCOUNT_PAGE_INFO;
  private destroyRef = inject(DestroyRef);
  mydata: AppUser | undefined;

  constructor(private myAccountService: MyAccountService) {
  }

  ngOnInit(): void {
    this.myAccountService.getProfileData()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: data => this.mydata = data,
        error: err => console.error(err)
      })
  }


}
