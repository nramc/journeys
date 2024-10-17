import {Component, model} from '@angular/core';
import {MatChipInputEvent, MatChipsModule} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {COMMA, ENTER, SPACE} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-tags-input',
  standalone: true,
  imports: [
    MatChipsModule,
    MatIcon
  ],
  templateUrl: './tags-input.component.html',
  styles: []
})
export class TagsInputComponent {
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;

  tags = model<string[]>([]);

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
