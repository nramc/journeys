import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  resource,
  signal,
  ViewChild
} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {getCategoryIconName, getCategoryLabel} from "../../config/icon-config";
import {getMemoryAgeBadge} from "../../utility/date-utils";
import {JourneyService} from "../../service/journey/journey.service";
import {firstValueFrom} from "rxjs";
import {saveAs} from "file-saver";
import {toPng} from "html-to-image";

@Component({
  selector: 'app-journey-banner-view',
  imports: [
    DatePipe,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './journey-banner-view.component.html',
  styleUrl: './journey-banner-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyBannerViewComponent {
  @ViewChild('storyCard') storyCardRef!: ElementRef<HTMLDivElement>;

  private readonly journeyId = inject<string>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<JourneyBannerViewComponent>);
  private readonly journeyService = inject(JourneyService);

  protected linkCopied = signal(false);
  protected isCapturing = signal(false);

  /** Load the full Journey object by ID so we have images, geoDetails, etc. */
  protected journeyResource = resource({
    loader: () => firstValueFrom(this.journeyService.getJourneyById(this.journeyId))
  });

  protected journey = computed(() => this.journeyResource.value());
  protected isLoading = computed(() => this.journeyResource.isLoading());

  /** MapTiler Static Maps API URL — only when the journey has a location Point */
  protected mapImageUrl = computed(() => {
    return null; // Temporarily disabled since map tiler does not provide static map for free plan
  });

  /** Up to 5 images for the bottom photo strip */
  protected photoStrip = computed(() =>
    (this.journey()?.imagesDetails?.images ?? [])
    .filter(img => img.url !== this.journey()?.thumbnail)
    .slice(0, 5)
  );

  /** Nostalgia badge — "2 years ago", "🎊 3 years ago today!", etc. */
  protected memoryAgeBadge = computed(() =>
    getMemoryAgeBadge(this.journey()?.journeyDate ?? '')
  );

  protected getCategoryIconName(): string {
    return getCategoryIconName(this.journey()?.geoDetails?.category);
  }

  protected getCategoryLabel(): string {
    return getCategoryLabel(this.journey()?.geoDetails?.category);
  }

  close(): void {
    this.dialogRef.close();
  }

  /** Capture the story card as a PNG and trigger a browser download */
  async onDownload(): Promise<void> {
    if (!this.storyCardRef) return;
    this.isCapturing.set(true);
    try {
      const dataUrl = await toPng(this.storyCardRef.nativeElement, {
        pixelRatio: 2,
        cacheBust: true,
      });
      const name = this.journey()?.name?.replace(/\s+/g, '-').toLowerCase() ?? 'journey';
      saveAs(dataUrl, `${name}-story.png`);
    } finally {
      this.isCapturing.set(false);
    }
  }

  /** Share the story — uses Web Share API with image blob when supported,
   *  otherwise falls back to copying the journey URL */
  async onShare(): Promise<void> {
    const j = this.journey();
    const url = `${globalThis.location.origin}/journey/${this.journeyId}/view`;

    if (navigator.share && this.storyCardRef) {
      this.isCapturing.set(true);
      try {
        const dataUrl = await toPng(this.storyCardRef.nativeElement, {
          pixelRatio: 2,
          cacheBust: true,
        });
        const blob = await (await fetch(dataUrl)).blob();
        const name = j?.name?.replace(/\s+/g, '-').toLowerCase() ?? 'journey';
        const file = new File([blob], `${name}-story.png`, {type: 'image/png'});

        const shareData: ShareData = {
          title: j?.name ?? 'My Journey',
          text: `✈️ Check out my journey: ${j?.name}`,
          url,
          ...(navigator.canShare?.({files: [file]}) ? {files: [file]} : {}),
        };
        await navigator.share(shareData);
      } catch {
        // User cancelled or share not supported with file — fallback
        await this.copyLink(url);
      } finally {
        this.isCapturing.set(false);
      }
    } else {
      await this.copyLink(url);
    }
  }

  private async copyLink(url: string): Promise<void> {
    await navigator.clipboard.writeText(url);
    this.linkCopied.set(true);
    setTimeout(() => this.linkCopied.set(false), 2500);
  }
}
