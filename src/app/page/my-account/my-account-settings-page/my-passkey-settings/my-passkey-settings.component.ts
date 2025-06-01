import {Component, computed, inject} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButton} from "@angular/material/button";
import {DatePipe, NgIf} from "@angular/common";
import {AuthService} from "../../../../service/auth/auth.service";
import {CredentialInfo, MyPasskeysService} from "../../../../service/my-account/my-passkeys.service";
import {NotificationService} from "../../../../service/common/notification.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-my-passkey-settings',
  imports: [
    MatIconModule, MatTooltipModule, MatButton, NgIf, DatePipe
  ],
  templateUrl: './my-passkey-settings.component.html',
  styleUrl: './my-passkey-settings.component.scss'
})
export class MyPasskeySettingsComponent {
  authService = inject(AuthService);
  passkeyService = inject(MyPasskeysService);
  notificationService = inject(NotificationService);

  passkeysSubject = new BehaviorSubject<CredentialInfo[]>([]);

  registeredPasskeys = toSignal(this.passkeysSubject.asObservable(), {initialValue: []});
  isPasskeyExists = computed(() => this.registeredPasskeys().length > 0);

  constructor() {
    this.list();
  }
  list() {
    this.passkeyService.list().subscribe({
      next: (credentials: CredentialInfo[]) => {
        console.log('Retrieved passkeys:', credentials);
        this.passkeysSubject.next(credentials);
      },
      error: (err: Error) => {
        console.error('Error retrieving passkeys:', err);
        this.notificationService.showError('Error retrieving passkeys: ' + err.message);
      }
    });
  }

  registerNewPasskey() {
    this.passkeyService.register().subscribe({
      next: () => {
        this.notificationService.showSuccess('Registration completed successfully!');
        this.list(); // Refresh the list of registered passkeys
      },
      error: (err: Error) => this.notificationService.showError('Error during registration:' + err.message)
    });
  }

  removePasskey(credentialId: string) {
    console.log('Removing passkey with ID:', credentialId);
    this.passkeyService.remove(credentialId).subscribe({
      next: () => {
        this.notificationService.showSuccess('Passkey removed successfully!');
        // Refresh the list of registered passkeys
        this.list(); // Refresh the list of registered passkeys
      },
      error: (err: Error) => this.notificationService.showError('Error removing passkey: ' + err.message)
    });
  }
}
