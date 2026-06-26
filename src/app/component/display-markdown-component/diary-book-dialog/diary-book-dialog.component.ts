import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MarkdownComponent} from 'ngx-markdown';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NarrationPlayerComponent} from '../../narration-player/narration-player.component';
import {cleanMarkdownForSpeech} from '../../../utility/text-utils';

export interface DiaryBookDialogData {
  title: string;
  markdownText: string;
  journeyDate: string;
}

@Component({
  selector: 'app-diary-book-dialog',
  imports: [MatDialogModule, MarkdownComponent, MatButtonModule, MatIconModule,
            MatTooltipModule, NarrationPlayerComponent],
  templateUrl: './diary-book-dialog.component.html',
  styleUrl: './diary-book-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiaryBookDialogComponent {
  protected readonly data = inject<DiaryBookDialogData>(MAT_DIALOG_DATA);
  protected readonly dialogRef = inject(MatDialogRef<DiaryBookDialogComponent>);

  /** Pre-cleaned plain text for the narration player. */
  protected readonly cleanedText = cleanMarkdownForSpeech(this.data.markdownText);

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
}
