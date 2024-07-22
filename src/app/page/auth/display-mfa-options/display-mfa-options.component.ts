import {Component, DestroyRef, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Credential, SecurityAttribute} from "../../../service/auth/login.service";
import {NgForOf} from "@angular/common";
import {
  TotpCodeVerificationComponent
} from "../../../component/security/totp-code-verification/totp-code-verification.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatDialog} from "@angular/material/dialog";
import {
  EmailCodeVerificationComponent
} from "../../../component/security/email-code-verification/email-code-verification.component";
import {MatIcon} from "@angular/material/icon";

export type MfaOptions = {
  credential: Credential,
  options: SecurityAttribute[]
};

@Component({
  selector: 'app-display-mfa-options',
  standalone: true,
  imports: [
    NgForOf,
    MatIcon
  ],
  templateUrl: './display-mfa-options.component.html',
  styles: `.mfa-option {
    width: 80%;
    height: 3rem;
  }`
})
export class DisplayMfaOptionsComponent {
  private destroyRef = inject(DestroyRef);
  mfaOptions: MfaOptions | undefined;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {
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

  onCloseCallback(result: any) {
    if (result === true) {
      let targetUrl = this.activatedRoute.snapshot.queryParams['redirectUrl'] ?? '/home';
      this.router.navigateByUrl(targetUrl).then(console.log);
    }
  }


}
