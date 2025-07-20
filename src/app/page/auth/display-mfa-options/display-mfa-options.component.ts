import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Credential, SecurityAttribute} from "../../../service/auth/login.service";
import {
  TotpCodeVerificationComponent
} from "../../../component/security/totp-code-verification/totp-code-verification.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatDialog} from "@angular/material/dialog";
import {
  EmailCodeVerificationComponent
} from "../../../component/security/email-code-verification/email-code-verification.component";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";

export interface MfaOptions {
  credential: Credential,
  options: SecurityAttribute[]
}

@Component({
  selector: 'app-display-mfa-options',
  imports: [
    MatIcon,
    MatButton
  ],
  templateUrl: './display-mfa-options.component.html',
  styles: `.mfa-option {
    width: 80%;
    height: 3rem;
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayMfaOptionsComponent {
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly destroyRef = inject(DestroyRef);
  mfaOptions: MfaOptions | undefined;

  constructor() {
    this.mfaOptions = this.router.getCurrentNavigation()?.extras?.state as MfaOptions;
  }

  continueWithTotpVerification() {

    const dialogRef = this.dialog.open(TotpCodeVerificationComponent, {
      data: this.mfaOptions!.credential,
      disableClose: true
    });

    dialogRef.afterClosed().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => this.onCloseCallback(result));
  }

  continueWithEmailCodeVerification() {

    const dialogRef = this.dialog.open(EmailCodeVerificationComponent, {
      data: this.mfaOptions!.credential,
      disableClose: true
    });

    dialogRef.afterClosed().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => this.onCloseCallback(result));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onCloseCallback(result: any) {
    if (result === true) {
      const targetUrl = this.activatedRoute.snapshot.queryParams['redirectUrl'] ?? '/home';
      this.router.navigateByUrl(targetUrl).then(console.log);
    }
  }


}
