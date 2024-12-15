import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {DELETE_MY_ACCOUNT_PAGE_INFO} from "../../../model/page.info.model";
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";
import {MyAccountService} from "../../../service/my-account/my-account.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-delete-my-account-page',
    imports: [
        PageHeaderComponent,
        MatIcon,
        MatListModule,
        MatButtonModule
    ],
    templateUrl: './delete-my-account-page.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteMyAccountPageComponent {
  protected readonly DELETE_MY_ACCOUNT_PAGE_INFO = DELETE_MY_ACCOUNT_PAGE_INFO;

  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly myAccountService = inject(MyAccountService);


  deleteAccount() {
    this.myAccountService.deleteMyAccount()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: _ => this.onSuccess(),
        error: err => console.error(err)
      });
  }

  onSuccess() {
    this.router.navigate(['/logout'], {
        queryParams: {'forced': 'true'}
      }
    )
      .then(console.log);
  }

  cancel() {
    this.router.navigate(['/home']).then(console.log);
  }
}
