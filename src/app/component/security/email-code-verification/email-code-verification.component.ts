import {Component, inject} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-email-code-verification',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  templateUrl: './email-code-verification.component.html',
  styleUrl: './email-code-verification.component.scss'
})
export class EmailCodeVerificationComponent {
  dialogRef: MatDialogRef<EmailCodeVerificationComponent> = inject(MatDialogRef<EmailCodeVerificationComponent>);

  confirmCode() {
    this.dialogRef.close(true);
  }

  sendCode() {

  }
}
