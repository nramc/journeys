import {Component, input, model} from '@angular/core';
import {MatChipInputEvent, MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {COMMA, ENTER, SPACE} from "@angular/cdk/keycodes";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-tags-input',
    imports: [
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
    ],
    templateUrl: './tags-input.component.html',
    styles: []
})
export class TagsInputComponent {
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;

  tags = model<string[]>([]);
  disabled = input<boolean>(false);

  addTag(event: MatChipInputEvent): void {
    const newTag = (event.value || '').toLowerCase().trim();
    if (newTag) {
      this.tags.update(data => [...data, newTag]);
    }
    // Clear the input value
    event.chipInput.clear();
  }

  removeTag(tag: string): void {
    this.tags.update(data => data.filter(value => value !== tag));
  }

}
