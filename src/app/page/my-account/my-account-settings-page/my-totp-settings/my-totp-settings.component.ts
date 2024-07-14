import {Component, inject} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TotpActivationComponent} from "./totp-activation/totp-activation.component";

@Component({
  selector: 'my-totp-settings',
  standalone: true,
  imports: [],
  templateUrl: './my-totp-settings.component.html',
  styleUrl: './my-totp-settings.component.scss'
})
export class MyTotpSettingsComponent {
  readonly dialog = inject(MatDialog);

  setupTotp() {
    const dialogRef = this.dialog.open(TotpActivationComponent, {disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Result:', result);
    });
  }

}
