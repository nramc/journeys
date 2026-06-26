import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import {MarkdownComponent} from 'ngx-markdown';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {DiaryBookDialogComponent} from './diary-book-dialog/diary-book-dialog.component';
import {NarrationPlayerComponent} from '../narration-player/narration-player.component';
import {cleanMarkdownForSpeech} from '../../utility/text-utils';

@Component({
  selector: 'app-display-markdown-component',
  imports: [
    MarkdownComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    NarrationPlayerComponent
  ],
  templateUrl: './display-markdown.component.html',
  styleUrl: './display-markdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayMarkdownComponent {
  title = input<string>('');
  markdownText = input<string>('');
  /** Optional ISO date string — rendered as a diary entry date */
  journeyDate = input<string>('');

  /**
   * Parse date parts into local time (avoids UTC-midnight timezone shift
   * that `new Date("YYYY-MM-DD")` causes in negative UTC-offset timezones).
   */
  readonly formattedDate = computed(() => {
    const raw = this.journeyDate();
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
  });

  /** Plain text passed to the narration player (markdown syntax stripped). */
  readonly cleanedText = computed(() => cleanMarkdownForSpeech(this.markdownText()));

  private readonly dialog = inject(MatDialog);

  /** Opens the two-page open-book diary dialog */
  openDiaryBook(): void {
    this.dialog.open(DiaryBookDialogComponent, {
      data: {
        title: this.title(),
        markdownText: this.markdownText(),
        journeyDate: this.journeyDate(),
      },
      panelClass: 'diary-book-panel',
      maxWidth: '95vw',
      maxHeight: '95vh',
      backdropClass: 'diary-book-backdrop',
    });
  }
}
