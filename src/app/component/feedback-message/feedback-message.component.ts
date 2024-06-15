import {Component, input} from '@angular/core';
import {FeedbackMessage} from "./feedback-message";

@Component({
  selector: 'app-feedback-message',
  standalone: true,
  imports: [],
  templateUrl: './feedback-message.component.html',
  styleUrl: './feedback-message.component.scss'
})
export class FeedbackMessageComponent {
  message = input<FeedbackMessage>({}, {
    alias: 'message'
  });

}
