import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoadingSpinnerComponent} from "./component/loading-spinner/loading-spinner.component";
import {NavigationMenuComponent} from "./component/navigation-menu/navigation-menu.component";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {ToolbarComponent} from "./component/toolbar/toolbar.component";
import {BreakpointObserver} from "@angular/cdk/layout";
import {from, map, switchMap, tap} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import * as webauthnJson from "@github/webauthn-json";
import {CredentialRequestOptionsJSON} from "@github/webauthn-json";
import {PublicKeyCredentialCreationOptionsJSON} from "@github/webauthn-json/src/webauthn-json/basic/json";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, LoadingSpinnerComponent, NavigationMenuComponent, MatSidenavContainer, MatSidenavContent, MatSidenav, ToolbarComponent, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Journey';
  private readonly observer = inject(BreakpointObserver);
  isMobile = toSignal(
    this.observer.observe(['(max-width: 768px)']).pipe(map((res) => res.matches)),
    {initialValue: false}
  );

  // testing
  username = 'ramachandrannellai@gmail.com';
  http = inject(HttpClient);

  async registerStart() {
    const authHeader = 'Basic ' + btoa(`${this.username}:RamNellai@7`);
    const headers = {headers: {'Authorization': authHeader}};

    this.http.post<PublicKeyCredentialCreationOptionsJSON>(
      'https://localhost:8080/webauthn/register/start', {username: this.username}, headers)
      .pipe(
        tap(res => console.log('Credential options received:', res)),
        switchMap((credentialCreateOptions) =>
          from(webauthnJson.create({publicKey: credentialCreateOptions})).pipe(
            tap(attestation => console.log('Attestation object:', attestation)),
            switchMap((attestation) =>
              this.http.post<boolean>('https://localhost:8080/webauthn/register/finish', attestation, headers)
            )
          )
        )
      ).subscribe({
      next: (result) => {
        console.log('Registration completed successfully:', result);
      },
      error: (err) => {
        console.error('Error during registration:', err);
      }
    });
  }

  async loginStart() {
    const response = await this.http.post<CredentialRequestOptionsJSON>(
      'http://localhost:8080/webauthn/authenticate/options', {username: this.username},
      {headers: {'Authorization': 'Basic ' + btoa(this.username + ':' + 'RamNellai@7')}}
    ).toPromise();

    const assertion = await webauthnJson.get(response!);
    await this.http.post('http://localhost:8080/login/webauthn', assertion,
      {headers: {'Authorization': 'Basic ' + btoa(this.username + ':' + 'RamNellai@7')}}
    ).toPromise();
    console.log('Login successful');
  }

}
