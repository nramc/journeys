import {Component, inject, input, model} from '@angular/core';
import {DisplayMarkdownComponent} from "../display-markdown-component/display-markdown.component";
import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NarrationEnhancerService} from "../../service/ai/narration-enhancer.service";


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
  //protected readonly tones = ['Adventurous', 'Romantic', 'Inspirational', 'Poetic', 'Funny', 'Minimalistic'];
  protected readonly tones = [
    '🌍 Adventurous',
    '❤️ Romantic',
    '💡 Inspirational',
    '🎨 Poetic',
    '😄 Funny',
    '🧘 Minimalistic'
  ];

  private readonly narrationEnhancerService = inject(NarrationEnhancerService);
  markdownStyle = model<'Source' | 'Preview'>('Source')
  disabled = input<boolean>(false);

  title = input<string>('');
  narration = model<string>('');

  enhanceNarration(tone: string) {
    console.log(tone);
    this.narrationEnhancerService.enhance({narration: this.narration(), tone: tone})
      .subscribe({next: data => this.narration.set(data.narration)});
  }
}
