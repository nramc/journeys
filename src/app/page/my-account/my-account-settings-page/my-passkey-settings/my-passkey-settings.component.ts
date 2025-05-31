import {Component, inject} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {AuthService} from "../../../../service/auth/auth.service";
import {MyPasskeysService} from "../../../../service/my-account/my-passkeys.service";
import {NotificationService} from "../../../../service/common/notification.service";

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
  passkeyService = inject(MyPasskeysService);
  notificationService = inject(NotificationService);

  isPasskeyActivated() {
    return false;
  }

  registerNewPasskey() {
    this.passkeyService.register().subscribe({
      next: () => this.notificationService.showSuccess('Registration completed successfully!'),
      error: (err: Error) => this.notificationService.showError('Error during registration:' + err.message)
    });
  }
}
