import {ChangeDetectionStrategy, Component, ElementRef, input, ViewChild} from '@angular/core';
import {MarkdownComponent} from "ngx-markdown";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-display-markdown-component',
  imports: [
    MarkdownComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './display-markdown.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayMarkdownComponent {
  title = input<string>('');
  markdownText = input<string>('');
  @ViewChild('markdownComponent', {read: ElementRef}) markdownElementRef!: ElementRef;


  readContent() {
    const element = this.markdownElementRef.nativeElement;
    const text = (element.innerText ?? element.textContent) ?? '';
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.75;
    utterance.pitch = 0;
    window.speechSynthesis.speak(utterance);
  }
}
