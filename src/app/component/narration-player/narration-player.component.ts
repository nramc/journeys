import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {LocalTtsService} from '../../service/tts/local-tts.service';

/**
 * Reusable narration player component.
 *
 * Accepts pre-cleaned plain text (no markdown) via the `text` input.
 * Provides separate English (Web Speech API) and Tamil (local transformers.js)
 * play buttons, plus a shared Stop button shown whenever either is active.
 *
 * Usage:
 *   <app-narration-player [text]="myCleanPlainText" />
 */
@Component({
  selector: 'app-narration-player',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatTooltipModule],
  templateUrl: './narration-player.component.html',
  styleUrl: './narration-player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NarrationPlayerComponent {
  /** Pre-cleaned plain text to narrate (no markdown syntax, no emoji). */
  text = input<string>('');

  protected readonly tts = inject(LocalTtsService);

  /** True while the translation model is loading or translating. */
  protected readonly isTamilBusy = computed(() => {
    const s = this.tts.tamilState();
    return s === 'loading-model' || s === 'translating';
  });

  /** True whenever English or Tamil is active (playing or processing). */
  protected readonly isAnyActive = computed(() =>
    this.tts.englishState() !== 'idle' ||
    this.tts.tamilState() !== 'idle'
  );

  protected playEnglish(): void {
    this.tts.speakEnglish(this.text());
  }

  protected playTamil(): void {
    this.tts.speakTamil(this.text());
  }

  protected stopAll(): void {
    this.tts.stopAll();
  }
}

