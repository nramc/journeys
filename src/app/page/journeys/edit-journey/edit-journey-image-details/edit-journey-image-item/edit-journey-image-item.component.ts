import {ChangeDetectionStrategy, Component, model, output} from '@angular/core';
import {JourneyImageDetail} from "../../../../../model/core/journey.model";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
    selector: 'app-edit-journey-image-item',
    imports: [
        FormsModule,
        MatIconModule,
        MatButtonModule,
        NgIf,
        MatFormFieldModule,
        MatInputModule,
        MatCheckbox
    ],
    templateUrl: 'edit-journey-image-item.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJourneyImageItemComponent {
  imageItem = model<JourneyImageDetail>(new JourneyImageDetail("", ""));
  saveItem = output<JourneyImageDetail>();
  cancelItem = output<JourneyImageDetail>();
  removeItem = output<JourneyImageDetail>();

}
