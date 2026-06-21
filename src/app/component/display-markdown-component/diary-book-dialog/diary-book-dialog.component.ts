import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  signal,
  ViewChild
} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MarkdownComponent} from 'ngx-markdown';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {TextToSpeechRequest, TextToSpeechService} from '../../../service/ai/text-to-speech.service';
import {finalize} from 'rxjs';

export interface DiaryBookDialogData {
  title: string;
  markdownText: string;
  journeyDate: string;
}

@Component({
  selector: 'app-diary-book-dialog',
  imports: [MatDialogModule, MarkdownComponent, MatButtonModule, MatIconModule,
            MatProgressSpinnerModule, MatTooltipModule],
  templateUrl: './diary-book-dialog.component.html',
  styleUrl: './diary-book-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiaryBookDialogComponent implements OnDestroy {
  protected readonly data = inject<DiaryBookDialogData>(MAT_DIALOG_DATA);
  protected readonly dialogRef = inject(MatDialogRef<DiaryBookDialogComponent>);
  private readonly ttsService = inject(TextToSpeechService);

  @ViewChild('markdownEl', {read: ElementRef}) markdownElRef!: ElementRef;

  // ── TTS state ──────────────────────────────────────────────────────────────
  isPlaying = signal(false);
  isLoading = signal(false);
  ttsError  = signal<string | null>(null);
  private audio: HTMLAudioElement | null = null;
  private audioUrl: string | null = null;

  /** Parse date parts into local time to avoid UTC-midnight timezone shift */
  protected readonly formattedDate: string | null = (() => {
    const raw = this.data.journeyDate;
    if (!raw) return null;
    const parts = raw.split('T')[0].split('-').map(Number);
    if (parts.length !== 3) return null;
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    if (Number.isNaN(d.getTime())) return null;
    return d.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  })();

  // ── TTS methods ────────────────────────────────────────────────────────────
  readContent(): void {
    this.stopPlayback();
    const el = this.markdownElRef?.nativeElement;
    if (!el) return;

    const raw = (el.innerText ?? el.textContent) ?? '';
    const text = this.cleanText(raw);
    if (!text.trim()) return;

    this.isLoading.set(true);
    this.ttsError.set(null);

    const req: TextToSpeechRequest = {
      text: text.trim(),
      voice: 'en_US-lessac-medium',
      lengthScale: 1.2,
      noiseScale: 0.7,
      noiseWScale: 0.8,
    };

    this.ttsService.synthesize(req)
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: blob => this.playAudio(blob),
        error: () => this.ttsError.set('Failed to synthesize speech. Please try again.'),
      });
  }

  stopPlayback(): void {
    this.cleanupAudio();
    this.isPlaying.set(false);
    if (globalThis.speechSynthesis) globalThis.speechSynthesis.cancel();
  }

  private playAudio(blob: Blob): void {
    this.cleanupAudio();
    this.audioUrl = URL.createObjectURL(blob);
    this.audio = new Audio(this.audioUrl);

    this.audio.onended = () => { this.cleanupAudio(); this.isPlaying.set(false); };
    this.audio.onerror = () => {
      this.ttsError.set('Error playing audio');
      this.cleanupAudio();
      this.isPlaying.set(false);
    };
    this.audio.play()
      .then(() => this.isPlaying.set(true))
      .catch(() => { this.ttsError.set('Failed to play audio'); this.cleanupAudio(); });
  }

  private cleanupAudio(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.onended = null;
      this.audio.onerror = null;
      this.audio = null;
    }
    if (this.audioUrl) { URL.revokeObjectURL(this.audioUrl); this.audioUrl = null; }
  }

  private cleanText(text: string): string {
    return text
      .replace(/\p{Emoji}/gu, '')
      .replace(/\b[a-z]+(?:_[a-z0-9]+)+\b/g, '')
      .replace(/!\[.*?]\(.*?\)/g, '')
      .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
      .replace(/`[^`]*`/g, '')
      .replace(/```[\s\S]*?```/g, '')
      .replace(/^#{1,6}\s+/gm, '')
      .replace(/(\*{1,3}|_{1,3})(.*?)\1/g, '$2')
      .replace(/^[-*_]{3,}\s*$/gm, '')
      .replace(/<[^>]+>/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/[|~^<>{}[\]\\]/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .replace(/[ \t]{2,}/g, ' ')
      .trim();
  }

  ngOnDestroy(): void { this.stopPlayback(); }
}
