import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {MarkdownComponent} from "ngx-markdown";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-display-markdown-component',
  standalone: true,
  imports: [
    MarkdownComponent,
    MatCardModule
  ],
  templateUrl: './display-markdown.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayMarkdownComponent {
  title = input<string>('');
  markdownText = input<string>('');

}
