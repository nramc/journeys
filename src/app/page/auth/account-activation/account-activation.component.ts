import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {LOGIN_PAGE_INFO} from "../../../model/page.info.model";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BffService} from "../../../service/bff/bff.service";
import {filter, mergeMap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {RegistrationService} from "../../../service/registration/registration.service";

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
    RouterLink
  ],
  templateUrl: './account-activation.component.html',
  styles: ''
})
export class AccountActivationComponent implements OnInit {
  protected readonly LOGIN_PAGE_INFO = LOGIN_PAGE_INFO;

  destroyRef = inject(DestroyRef);
  bffService = inject(BffService);
  registrationService = inject(RegistrationService);

  accountActivationForm;
  isSuccessful = signal<boolean>(false);
  isErrorOccurred = signal<boolean>(false);

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
      mergeMap(version => this.registrationService.activate({
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
    this.isErrorOccurred.set(false);
  }

  private onError(err: any) {
    console.log(err);
    this.isErrorOccurred.set(true);
    this.isSuccessful.set(false);
  }
}
