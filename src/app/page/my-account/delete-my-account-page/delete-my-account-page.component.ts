import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {DELETE_MY_ACCOUNT_PAGE_INFO} from "../../../model/page.info.model";
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";
import {MyAccountService} from "../../../service/my-account/my-account.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-delete-my-account-page',
  standalone: true,
  imports: [
    PageHeaderComponent,
    MatIcon
  ],
  templateUrl: './delete-my-account-page.component.html',
  styleUrl: './delete-my-account-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteMyAccountPageComponent {
  protected readonly DELETE_MY_ACCOUNT_PAGE_INFO = DELETE_MY_ACCOUNT_PAGE_INFO;
  private destroyRef = inject(DestroyRef);

  constructor(
    private router: Router,
    private myAccountService: MyAccountService
  ) {
  }

  deleteAccount() {
    this.myAccountService.deleteMyAccount()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: data => this.onSuccess(),
        error: err => console.error(err)
      });
  }

  onSuccess() {
    this.router.navigate(['/logout']).then(console.log);
  }

  cancel() {
    this.router.navigate(['/home']).then(console.log);
  }
}
