import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {Observable} from 'rxjs';
import {ThirukkuralService} from '../../service/thirukkural/thirukkural.service';
import {Thirukkural} from '../../service/thirukkural/thirukkural.type';
@Component({
  selector: 'app-thirukkural-widget',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './thirukkural-widget.component.html',
  styles: [`
    .thirukkural-header .mat-mdc-card-header-text {
      min-width: 0;
      margin: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirukkuralWidgetComponent {
  private readonly thirukkuralService = inject(ThirukkuralService);
  private readonly defaultKural: Thirukkural = {
    chapter: 'கடவுள் வாழ்த்து',
    kural: ['அகர முதல எழுத்தெல்லாம் ஆதி', 'பகவன் முதற்றே உலகு.'],
    number: 1,
    section: 'அறத்துப்பால்',
    meaning: {
      ta_mu_va: 'மு.வ : எழுத்துக்கள் எல்லாம் அகரத்தை அடிப்படையாக கொண்டிருக்கின்றன. அதுபோல உலகம் கடவுளை அடிப்படையாக கொண்டிருக்கிறது.',
      ta_salamon: 'சாலமன் பாப்பையா : எழுத்துக்கள் எல்லாம் அகரத்தில் தொடங்குகின்றன; (அது போல) உலகம் கடவுளில் தொடங்குகிறது.',
      en: 'As the letter A is the first of all letters, so the eternal God is first in the world.',
      en_modern: 'Just as A is the first of all letters, the eternal is the beginning of the world.'
    }
  };
  kural = signal<Thirukkural>(this.defaultKural);
  loading = signal(true);
  error = signal(false);
  constructor() {
    this.fetchKural(this.thirukkuralService.getDailyKural());
  }
  loadRandomKural(): void {
    this.fetchKural(this.thirukkuralService.getRandomKural());
  }
  getNextKural(): void {
    const nextId = this.kural().number >= 1330 ? 1 : this.kural().number + 1;
    this.fetchKural(this.thirukkuralService.getKuralById(nextId));
  }
  getPreviousKural(): void {
    const previousId = this.kural().number <= 1 ? 1330 : this.kural().number - 1;
    this.fetchKural(this.thirukkuralService.getKuralById(previousId));
  }
  retry(): void {
    this.fetchKural(this.thirukkuralService.getDailyKural());
  }
  private fetchKural(request: Observable<Thirukkural>): void {
    this.loading.set(true);
    this.error.set(false);
    request.subscribe({
      next: data => this.kural.set(this.normalizeKural(data)),
      error: () => {
        this.loading.set(false);
        this.error.set(true);
      },
      complete: () => this.loading.set(false)
    });
  }
  private normalizeKural(value: unknown): Thirukkural {
    const raw = this.asRecord(value);
    const meaning = this.asRecord(raw['meaning']);
    const rawLines = Array.isArray(raw['kural']) ? raw['kural'] : [raw['kural']];
    return {
      chapter: this.toDisplayText(raw['chapter']),
      kural: rawLines.map(line => this.toDisplayText(line)).filter(Boolean),
      number: this.toNumber(raw['number']),
      section: this.toDisplayText(raw['section']),
      meaning: {
        en: this.toDisplayText(meaning['en']),
        en_modern: this.toDisplayText(meaning['en_modern']),
        ta_mu_va: this.toDisplayText(meaning['ta_mu_va']),
        ta_salamon: this.toDisplayText(meaning['ta_salamon'])
      }
    };
  }
  private asRecord(value: unknown): Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value)
      ? value as Record<string, unknown>
      : {};
  }
  private toNumber(value: unknown): number {
    const record = this.asRecord(value);
    const candidate = record['number'] ?? record['id'] ?? record['value'] ?? value;
    const parsed = Number(candidate);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  }
  private toDisplayText(value: unknown): string {
    if (typeof value === 'string') {
      return value;
    }
    if (typeof value === 'number') {
      return String(value);
    }
    const record = this.asRecord(value);
    for (const key of ['text', 'name', 'title', 'value', 'ta', 'en', 'content']) {
      const candidate = record[key];
      if (typeof candidate === 'string' && candidate.trim()) {
        return candidate;
      }
    }
    return '';
  }
}
