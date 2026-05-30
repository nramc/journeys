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
import {Howl} from 'howler';
import {getMemoryAgeBadge} from "../../utility/date-utils";

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

  // ── Background music ──
  private bgMusic: Howl | null = null;
  private readonly AUDIO_TRACKS = [
    'assets/audio/absolutesound-guitar-music-528972.mp3',
    'assets/audio/ambient-piano-524039.mp3',
    'assets/audio/atlasaudio-emotional-piano-510218.mp3',
    'assets/audio/mmaudio-compass-to-your-heart-518507.mp3',
    'assets/audio/moodmode-rainbow-foundation-239195.mp3',
    'assets/audio/music_unlimited-inspiring-cinematic-gradually-background-music-161952',
    'assets/audio/paulyudin-soft-piano-emotional-156896.mp3',
    'assets/audio/the_mountain-joy-story-131417.mp3',
    'assets/audio/the_mountain-nature-joy-131411.mp3',
    'assets/audio/the_mountain-peaceful-joy-131620.mp3',
    'assets/audio/the_mountain-romantic-joy-131633.mp3'
  ];
  private readonly FADE_DURATION = 800;
  private readonly MAX_VOLUME = 0.45;
  musicMuted = signal<boolean>(false);

  constructor() {
    effect(() => {
      if (this.reliveMode()) {
        this.reliveIndex.set(0);
        this.relivePlayerRunning.set(true);
        this.attachReliveOverlay();
        this.startReliveAutoplay();
        this.initAndPlayMusic();
      } else {
        this.detachReliveOverlay();
        this.stopReliveAutoplay();
        this.fadeOutAndStopMusic();
      }
    });

    // React to slide changes — pause music on video, resume on image
    effect(() => {
      const slide = this.currentReliveSlide();
      if (!this.reliveMode() || this.musicMuted()) return;
      if (slide?.type === 'video') {
        this.fadeOutMusic();
      } else if (slide?.type === 'image') {
        this.fadeInMusic();
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
    const memoryAgeBadge = getMemoryAgeBadge(journeyDate);
    return memoryAgeBadge ? `${memoryAgeBadge.emoji} ${memoryAgeBadge.label}` : '';
  }

  /** Smooth-scroll to a year anchor in the timeline */
  scrollToYear(event: Event, year: string) {
    event.preventDefault();
    const el = this.document.getElementById('year-' + year);
    el?.scrollIntoView({behavior: 'smooth', block: 'center'});
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
    this.portalOutlet ??= new DomPortalOutlet(
      this.document.body,
      this.appRef,
      this.injector
    );
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

  // ── Background music controls ──

  private initAndPlayMusic() {
    this.bgMusic ??= new Howl({
      src: [this.AUDIO_TRACKS[Math.floor(Math.random() * this.AUDIO_TRACKS.length)]],
      loop: true,
      volume: 0,
      html5: true
    });
    if (!this.musicMuted()) {
      this.bgMusic.play();
      this.bgMusic.fade(0, this.MAX_VOLUME, this.FADE_DURATION);
    }
  }

  private fadeInMusic() {
    if (!this.bgMusic || this.musicMuted()) return;
    // Clear any pending fade callbacks (e.g. a pause scheduled by fadeOutMusic)
    this.bgMusic.off('fade');
    if (!this.bgMusic.playing()) {
      this.bgMusic.play();
    }
    this.bgMusic.fade(this.bgMusic.volume(), this.MAX_VOLUME, this.FADE_DURATION);
  }

  private fadeOutMusic() {
    if (!this.bgMusic) return;
    // Clear any pending fade callbacks before starting a new fade
    this.bgMusic.off('fade');
    this.bgMusic.fade(this.bgMusic.volume(), 0, this.FADE_DURATION);
    // Pause after fade completes
    this.bgMusic.once('fade', () => {
      if (this.bgMusic?.volume() === 0) {
        this.bgMusic.pause();
      }
    });
  }

  private fadeOutAndStopMusic() {
    if (!this.bgMusic) return;
    this.bgMusic.off('fade');
    const currentVol = this.bgMusic.volume();
    if (currentVol <= 0 || !this.bgMusic.playing()) {
      this.destroyAudio();
      return;
    }
    this.bgMusic.fade(currentVol, 0, this.FADE_DURATION);
    this.bgMusic.once('fade', () => this.destroyAudio());
  }

  toggleMusicMute() {
    const muted = !this.musicMuted();
    this.musicMuted.set(muted);
    if (muted) {
      this.fadeOutMusic();
    } else {
      this.fadeInMusic();
    }
  }

  private destroyAudio() {
    if (this.bgMusic) {
      this.bgMusic.unload();
      this.bgMusic = null;
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
      case 'm':
        this.toggleMusicMute();
        break;
    }
  }
}
