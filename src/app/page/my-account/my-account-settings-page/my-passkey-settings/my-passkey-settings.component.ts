import {Component, inject} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {AuthService} from "../../../../service/auth/auth.service";

@Component({
  selector: 'app-my-passkey-settings',
  imports: [
    MatIconModule, MatTooltipModule, MatButton, NgIf
  ],
  templateUrl: './my-passkey-settings.component.html',
  styleUrl: './my-passkey-settings.component.scss'
})
export class MyPasskeySettingsComponent {
  authService = inject(AuthService);

  isPasskeyActivated() {
    return false;
  }

  registerNewPasskey() {
    console.log('Registering new passkey...');
  }
}
