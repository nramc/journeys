import {ChangeDetectionStrategy, Component, model, output} from '@angular/core';
import {JourneyImageDetail} from "../../../../../model/core/journey.model";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {JsonPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-journey-image-item',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    JsonPipe
  ],
  templateUrl: 'edit-journey-image-item.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJourneyImageItemComponent {
  imageItem = model<JourneyImageDetail>(new JourneyImageDetail("", ""));
  save = output<JourneyImageDetail>();
  cancel = output<JourneyImageDetail>();
  remove = output<JourneyImageDetail>();

}
