import {Component, input} from '@angular/core';
import {FeedbackMessage} from "./feedback-message";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-feedback-message',
  standalone: true,
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './feedback-message.component.html',
  styleUrl: './feedback-message.component.scss'
})
export class FeedbackMessageComponent {
  message = input<FeedbackMessage>({}, {
    alias: 'message'
  });

}
