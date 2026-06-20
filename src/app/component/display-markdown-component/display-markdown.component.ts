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
    const text = (element.innerText ?? element.textContent) ?? '';

    if (!text.trim()) {
      return;
    }

    this.isLoading.set(true);
    this.error.set(null);

    this.speakEnglish(text);
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
