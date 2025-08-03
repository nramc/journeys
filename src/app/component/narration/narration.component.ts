import {Component, input, model} from '@angular/core';
import {DisplayMarkdownComponent} from "../display-markdown-component/display-markdown.component";
import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'app-narration',
  imports: [
    DisplayMarkdownComponent,
    FormsModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './narration.component.html',
  styles: []
})
export class NarrationComponent {
  markdownStyle = model<'Source' | 'Preview'>('Source')
  disabled = input<boolean>(false);

  title = input<string>('');
  narration = model<string>('');

  enhanceNarration(formal: string) {
    console.log(formal);
    this.narration.update(currentValue => currentValue + '\n\n' + formal);
  }
}
