import {Component, input, model, signal} from '@angular/core';
import {DisplayMarkdownComponent} from "../display-markdown-component/display-markdown.component";
import {FormsModule} from "@angular/forms";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-narration',
  standalone: true,
  imports: [
    DisplayMarkdownComponent,
    FormsModule,
    MatButtonToggle,
    MatButtonToggleGroup,
    NgIf
  ],
  templateUrl: './narration.component.html',
  styleUrl: './narration.component.scss'
})
export class NarrationComponent {
  markdownStyle = model<'Source' | 'Preview'>('Source')
  disabled = input<boolean>(false);

  title = input<string>('');
  narration = model<string>('');

}
