import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  OnDestroy,
  signal,
  ViewChild
} from '@angular/core';
import {MarkdownComponent} from "ngx-markdown";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {TextToSpeechRequest, TextToSpeechService} from "../../service/ai/text-to-speech.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-display-markdown-component',
  imports: [
    MarkdownComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './display-markdown.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayMarkdownComponent implements OnDestroy {
  title = input<string>('');
  markdownText = input<string>('');
  @ViewChild('markdownComponent', {read: ElementRef}) markdownElementRef!: ElementRef;

  private readonly ttsService = inject(TextToSpeechService);

  isPlaying = signal(false);
  isLoading = signal(false);
  error = signal<string | null>(null);
  private audio: HTMLAudioElement | null = null;
  private audioUrl: string | null = null;


  readContent() {
    this.stopPlayback();
    const element = this.markdownElementRef.nativeElement;
    const rawText = (element.innerText ?? element.textContent) ?? '';
    const text = this.cleanTextForSpeech(rawText);

    if (!text.trim()) {
      return;
    }

    this.isLoading.set(true);
    this.error.set(null);

    this.speakEnglish(text);
  }

  private cleanTextForSpeech(text: string): string {
    return text
      // Remove emoji — \p{Emoji} covers presentation, modifier, component & pictographic chars
      .replace(/\p{Emoji}/gu, '')
      // Remove Material Icons ligature text (e.g. "volume_up", "stop", "arrow_forward")
      .replace(/\b[a-z]+(?:_[a-z0-9]+)+\b/g, '')
      // Remove markdown image syntax: ![alt](url)
      .replace(/!\[.*?]\(.*?\)/g, '')
      // Remove markdown link syntax, keep label: [label](url) → label
      .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
      // Remove inline code blocks
      .replace(/`[^`]*`/g, '')
      // Remove fenced code blocks
      .replace(/```[\s\S]*?```/g, '')
      // Remove markdown headings markers (#)
      .replace(/^#{1,6}\s+/gm, '')
      // Remove bold/italic markers (**, __, *, _)
      .replace(/(\*{1,3}|_{1,3})(.*?)\1/g, '$2')
      // Remove horizontal rules
      .replace(/^[-*_]{3,}\s*$/gm, '')
      // Remove HTML tags
      .replace(/<[^>]+>/g, '')
      // Remove URLs
      .replace(/https?:\/\/\S+/g, '')
      // Remove special punctuation that disrupts TTS rhythm
      .replace(/[|~^<>{}[\]\\]/g, '')
      // Collapse multiple blank lines / excessive whitespace
      .replace(/\n{3,}/g, '\n\n')
      .replace(/[ \t]{2,}/g, ' ')
      .trim();
  }

  private playAudio(blob: Blob) {
    this.cleanupAudio();

    this.audioUrl = URL.createObjectURL(blob);
    this.audio = new Audio(this.audioUrl);

    this.audio.onended = () => {
      this.cleanupAudio();
      this.isPlaying.set(false);
    };

    this.audio.onerror = () => {
      this.error.set('Error playing audio');
      this.cleanupAudio();
      this.isPlaying.set(false);
    };

    this.audio.play()
    .then(() => this.isPlaying.set(true))
    .catch(err => {
      this.error.set('Failed to play audio');
      this.cleanupAudio();
      console.error('Audio playback error:', err);
    });
  }

  private cleanupAudio() {
    if (this.audio) {
      this.audio.pause();
      this.audio.onended = null;
      this.audio.onerror = null;
      this.audio = null;
    }

    if (this.audioUrl) {
      URL.revokeObjectURL(this.audioUrl);
      this.audioUrl = null;
    }
  }

  stopPlayback() {
    this.cleanupAudio();
    this.isPlaying.set(false);

    if (globalThis.speechSynthesis) {
      globalThis.speechSynthesis.cancel();
    }
  }

  ngOnDestroy() {
    this.stopPlayback();
  }

  speakEnglish(text: string) {
    const request: TextToSpeechRequest = {
      text: text.trim(),
      voice: 'en_US-lessac-medium',
      lengthScale: 1.2,
      noiseScale: 0.7,
      noiseWScale: 0.8
    };

    this.ttsService.synthesize(request)
    .pipe(finalize(() => this.isLoading.set(false)))
    .subscribe({
      next: (blob) => this.playAudio(blob),
      error: (err) => {
        this.error.set('Failed to synthesize speech. Please try again.');
        console.error('TTS Error:', err);
      }
    });
  }

}
