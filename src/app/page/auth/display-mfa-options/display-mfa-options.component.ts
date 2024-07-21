import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Credential, SecurityAttribute} from "../../../service/auth/login.service";
import {JsonPipe, NgForOf} from "@angular/common";

export type MfaOptions = {
  credential: Credential,
  options: SecurityAttribute[]
};

@Component({
  selector: 'app-display-mfa-options',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe
  ],
  templateUrl: './display-mfa-options.component.html',
  styles: `.mfa-option { width: 80%; height: 3rem; }`
})
export class DisplayMfaOptionsComponent {
  mfaOptions: MfaOptions | undefined;

  constructor(private router: Router) {
    this.mfaOptions = this.router.getCurrentNavigation()?.extras?.state as MfaOptions;
  }


}
