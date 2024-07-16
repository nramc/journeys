import {Component, inject} from '@angular/core';
import {MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [
    MatDialogClose,
    NgIf
  ],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent {
  dialogRef: MatDialogRef<ConfirmationDialogComponent> = inject(MatDialogRef<ConfirmationDialogComponent>);

  confirmAction() {
    this.dialogRef.close(true);
  }
}
