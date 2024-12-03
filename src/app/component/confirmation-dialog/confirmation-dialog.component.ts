import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [
    MatDialogClose,
    MatButton,
    MatCardModule
  ],
  templateUrl: './confirmation-dialog.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationDialogComponent {
  dialogRef: MatDialogRef<ConfirmationDialogComponent> = inject(MatDialogRef<ConfirmationDialogComponent>);

  confirmAction() {
    this.dialogRef.close(true);
  }
}
