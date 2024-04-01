import {Component, Input} from '@angular/core';
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-feedback-message',
  standalone: true,
  imports: [
    NgbAlert
  ],
  templateUrl: './feedback-message.component.html',
  styleUrl: './feedback-message.component.scss'
})
export class FeedbackMessageComponent {
  _successMessage: string = '';
  _errorMessage: string = '';

  @Input("successMessage")
  set successMessage(message: string) {
    console.log("message received", message)
    this._successMessage = message;
    this._errorMessage = '';
  }

  @Input("errorMessage")
  set errorMessage(message: string) {
    this._errorMessage = message;
    this._successMessage = '';
  }

}
