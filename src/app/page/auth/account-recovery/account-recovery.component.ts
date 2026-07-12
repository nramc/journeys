import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {AccountRecoveryService} from "../../../service/auth/account-recovery.service";
import {NotificationService} from "../../../service/common/notification.service";
import {LOGIN_PAGE_INFO} from "../../../model/page.info.model";

export class AccountRecoveryForm {
  constructor(public username = '') {
  }
}

@Component({
  selector: 'app-account-recovery',
  imports: [
    FormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  templateUrl: './account-recovery.component.html',
  styles: `
    @keyframes pop-in {
      from { transform: scale(0.6); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .pop-in {
      animation: pop-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountRecoveryComponent {
  protected readonly LOGIN_PAGE_INFO = LOGIN_PAGE_INFO;

  private readonly accountRecoveryService = inject(AccountRecoveryService);
  private readonly notificationService = inject(NotificationService);

  form = signal<AccountRecoveryForm>(new AccountRecoveryForm());
  isSubmitting = signal<boolean>(false);
  isSuccessful = signal<boolean>(false);
  submittedEmail = signal<string | null>(null);

  requestRecovery(recoveryForm: NgForm) {
    if (recoveryForm.valid && !this.isSubmitting()) {
      this.isSubmitting.set(true);
      const username = this.form().username;
      this.accountRecoveryService.requestRecovery(username).subscribe({
        next: () => this.onSuccess(username),
        error: error => this.onError(error)
      });
    }
  }

  tryAnotherEmail() {
    this.isSuccessful.set(false);
    this.submittedEmail.set(null);
    this.form.set(new AccountRecoveryForm());
  }

  private onSuccess(username: string) {
    this.isSubmitting.set(false);
    this.isSuccessful.set(true);
    this.submittedEmail.set(username);
  }

  private onError(error: HttpErrorResponse) {
    console.error(error);
    this.isSubmitting.set(false);
    this.notificationService.showError('Unable to process your request right now. Please try again later.');
  }
}
