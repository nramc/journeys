import { Component } from '@angular/core';
import {MatDialogClose} from "@angular/material/dialog";

@Component({
  selector: 'app-totp-activation',
  standalone: true,
    imports: [
        MatDialogClose
    ],
  templateUrl: './totp-activation.component.html',
  styleUrl: './totp-activation.component.scss'
})
export class TotpActivationComponent {

}
