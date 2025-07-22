import {Component, input, model} from '@angular/core';
import {DisplayMarkdownComponent} from "../display-markdown-component/display-markdown.component";
import {FormsModule} from "@angular/forms";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";


@Component({
    selector: 'app-narration',
    imports: [
    DisplayMarkdownComponent,
    FormsModule,
    MatButtonToggle,
    MatButtonToggleGroup
],
    templateUrl: './narration.component.html',
    styles: []
})
export class NarrationComponent {
  markdownStyle = model<'Source' | 'Preview'>('Source')
  disabled = input<boolean>(false);

  title = input<string>('');
  narration = model<string>('');

}
