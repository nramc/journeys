import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  HostListener,
  inject,
  Injector,
  input,
  model,
  signal,
  viewChild
} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {CdkPortal, DomPortalOutlet, PortalModule} from '@angular/cdk/portal';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {Journey} from '../../model/core/journey.model';
import {JourneyCardViewComponent} from '../journey-card-view/journey-card-view.component';

/** Compute "X years ago" label from journeyDate */
export function getYearsAgoLabel(journeyDate: string): string {
  const journeyYear = new Date(journeyDate).getFullYear();
  const currentYear = new Date().getFullYear();
  const diff = currentYear - journeyYear;
  if (diff === 0) return 'This year';
  if (diff === 1) return '1 year ago';
  return `${diff} years ago`;
}

/** A single slide in the relive cinematic mode — either an image or a YouTube video */
export interface ReliveSlide {
  type: 'image' | 'video';
  src: string;
  title: string;
  entry: Journey;
}

@Component({
  selector: 'app-timeline-story',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    JourneyCardViewComponent,
    PortalModule
  ],
  templateUrl: './timeline-story.component.html',
  styleUrl: './timeline-story.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineStoryComponent {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly document = inject(DOCUMENT);
  private readonly appRef = inject(ApplicationRef);
  private readonly injector = inject(Injector);

  entries = input<Journey[]>([]);
  heading = input<string>('');
  reliveMode = model<boolean>(false);

  /** CDK Portal reference for rendering the overlay at document body level */
  relivePortal = viewChild(CdkPortal);
  private portalOutlet: DomPortalOutlet | null = null;

  constructor() {
    effect(() => {
      if (this.reliveMode()) {
        this.reliveIndex.set(0);
        this.relivePlayerRunning.set(true);
        this.attachReliveOverlay();
        this.startReliveAutoplay();
      } else {
        this.detachReliveOverlay();
        this.stopReliveAutoplay();
      }
    });
  }

  // ── Relive mode state ──
  reliveIndex = signal<number>(0);
  /** When set, relive shows only this journey's slides; null = all journeys */
  reliveJourneyId = signal<string | null>(null);

  /** Extract unique years from entries for the year-jump rail */
  years = computed<string[]>(() => {
    const yearSet = new Set<string>();
    for (const entry of this.entries()) {
      const y = new Date(entry.journeyDate).getFullYear().toString();
      yearSet.add(y);
    }
    return Array.from(yearSet).sort((a, b) => a.localeCompare(b));
  });

  relivePlayerRunning = signal<boolean>(true);
  private reliveIntervalId: ReturnType<typeof setInterval> | null = null;

  /** Flatten all images AND videos — filtered by reliveJourneyId when set */
  reliveSlides = computed<ReliveSlide[]>(() => {
    const journeyId = this.reliveJourneyId();
    const sourceEntries = journeyId
      ? this.entries().filter(e => e.id === journeyId)
      : this.entries();

    const slides: ReliveSlide[] = [];
    for (const entry of sourceEntries) {
      for (const img of entry.imagesDetails?.images ?? []) {
        slides.push({type: 'image', src: img.url, title: img.title, entry});
      }
      for (const video of entry.videosDetails?.videos ?? []) {
        slides.push({type: 'video', src: video.videoId, title: entry.name, entry});
      }
    }
    return slides;
  });

  currentReliveSlide = computed(() => {
    const slides = this.reliveSlides();
    const idx = this.reliveIndex();
    return slides.length > 0 ? slides[idx % slides.length] : null;
  });

  currentVideoEmbedUrl = computed<SafeResourceUrl | null>(() => {
    const slide = this.currentReliveSlide();
    if (slide?.type === 'video') {
      const url = `https://www.youtube.com/embed/${slide.src}?autoplay=1&rel=0`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    return null;
  });

  getYearsAgo(journeyDate: string): string {
    return getYearsAgoLabel(journeyDate);
  }

  getLocationLabel(entry: Journey): string {
    const parts = [entry.geoDetails?.city, entry.geoDetails?.country].filter(Boolean);
    return parts.length ? parts.join(', ') : '';
  }

  getYouTubeThumbnail(videoId: string): string {
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  }

  // ── Relive mode controls ──

  /** Start relive for a single journey */
  reliveJourney(journeyId: string) {
    this.reliveJourneyId.set(journeyId);
    this.reliveMode.set(true);
  }

  closeRelive() {
    this.reliveMode.set(false);
    this.reliveJourneyId.set(null);
    this.stopReliveAutoplay();
  }

  toggleRelivePlayer() {
    if (this.relivePlayerRunning()) {
      this.stopReliveAutoplay();
      this.relivePlayerRunning.set(false);
    } else {
      this.startReliveAutoplay();
      this.relivePlayerRunning.set(true);
    }
  }

  reliveNext() {
    const total = this.reliveSlides().length;
    if (total > 0) {
      this.reliveIndex.set((this.reliveIndex() + 1) % total);
    }
  }

  relivePrev() {
    const total = this.reliveSlides().length;
    if (total > 0) {
      this.reliveIndex.set((this.reliveIndex() - 1 + total) % total);
    }
  }

  private startReliveAutoplay() {
    this.stopReliveAutoplay();
    this.reliveIntervalId = setInterval(() => {
      // Don't auto-advance on video slides — let the video play to completion
      if (this.currentReliveSlide()?.type !== 'video') {
        this.reliveNext();
      }
    }, 5000);
  }

  private stopReliveAutoplay() {
    if (this.reliveIntervalId) {
      clearInterval(this.reliveIntervalId);
      this.reliveIntervalId = null;
    }
  }

  /** Attach the relive portal to the document body — escapes sidenav stacking context */
  private attachReliveOverlay() {
    const portal = this.relivePortal();
    if (!portal) return;
    if (!this.portalOutlet) {
      this.portalOutlet = new DomPortalOutlet(
        this.document.body,
        this.appRef,
        this.injector
      );
    }
    if (!this.portalOutlet.hasAttached()) {
      this.portalOutlet.attach(portal);
    }
  }

  /** Detach the relive portal from the document body */
  private detachReliveOverlay() {
    if (this.portalOutlet?.hasAttached()) {
      this.portalOutlet.detach();
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (!this.reliveMode()) return;
    switch (event.key) {
      case 'Escape':
        this.closeRelive();
        break;
      case 'ArrowRight':
      case ' ':
        event.preventDefault();
        this.reliveNext();
        break;
      case 'ArrowLeft':
        this.relivePrev();
        break;
      case 'p':
        this.toggleRelivePlayer();
        break;
    }
  }
}
