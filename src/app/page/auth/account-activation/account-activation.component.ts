import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {LOGIN_PAGE_INFO} from "../../../model/page.info.model";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {BffService} from "../../../service/bff/bff.service";
import {filter, mergeMap, tap} from "rxjs";
import {LoginService} from "../../../service/auth/login.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

export class AccountActivationForm {
  constructor(public username: string | null = '', public emailToken: string | null = '') {
  }
}

@Component({
  selector: 'app-account-activation',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    MatProgressSpinner
  ],
  templateUrl: './account-activation.component.html',
  styleUrl: './account-activation.component.scss'
})
export class AccountActivationComponent implements OnInit {
  protected readonly LOGIN_PAGE_INFO = LOGIN_PAGE_INFO;

  destroyRef = inject(DestroyRef);
  bffService = inject(BffService);
  loginService = inject(LoginService);

  accountActivationForm;
  isSuccessful = signal<boolean>(false);
  isErrorOccurred = signal<boolean>(false);
  isLoading = signal<boolean>(false);

  constructor(route: ActivatedRoute) {
    this.accountActivationForm = new AccountActivationForm(
      route.snapshot.queryParamMap.get('identifier'),
      route.snapshot.queryParamMap.get('token')
    );
  }

  activate(activationForm: NgForm) {
    if (activationForm.valid) {
      this.activateAccount();
    } else {
      this.onError("Invalid data");
    }

  }

  ngOnInit(): void {
    this.activateAccount();
  }

  activateAccount() {
    this.bffService.getVersion().pipe(
      takeUntilDestroyed(this.destroyRef),
      filter(_ => this.accountActivationForm.username != null && this.accountActivationForm.emailToken != null),
      tap(_ => this.isLoading.set(true)),
      mergeMap(version => this.loginService.activate({
        username: this.accountActivationForm.username!,
        emailToken: this.accountActivationForm.emailToken!,
        apiVersion: version.version
      }))
    ).subscribe({
      next: _ => this.onSuccess(),
      error: err => this.onError(err)
    });
  }

  onSuccess() {
    this.isSuccessful.set(true);
    this.isLoading.set(false);
    this.isErrorOccurred.set(false);
  }

  private onError(err: any) {
    console.log(err);
    this.isErrorOccurred.set(true);
    this.isLoading.set(false);
    this.isSuccessful.set(false);
  }
}
