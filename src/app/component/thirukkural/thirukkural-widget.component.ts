import {Component, inject, signal} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {Thirukkural} from "../../service/thirukkural/thirukkural.type";
import {ThirukkuralService} from "../../service/thirukkural/thirukkural.service";
import {NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'app-thirukkural-widget',
  imports: [MatCardModule, MatButtonModule, NgIf, MatIconModule],
  templateUrl: './thirukkural-widget.component.html',
  styles: []
})
export class ThirukkuralWidgetComponent {
  private readonly DEFAULT_KURAL: Thirukkural = {
    "chapter": "கடவுள் வாழ்த்து",
    "kural": [
      "அகர முதல எழுத்தெல்லாம் ஆதி",
      "பகவன் முதற்றே உலகு."
    ],
    "number": 1,
    "section": "அறத்துப்பால்",
    "meaning": {
      "ta_mu_va": "மு.வ : எழுத்துக்கள் எல்லாம் அகரத்தை அடிப்படையாக கொண்டிருக்கின்றன. அதுபோல உலகம் கடவுளை அடிப்படையாக கொண்டிருக்கிறது.",
      "ta_salamon": "சாலமன் பாப்பையா : எழுத்துக்கள் எல்லாம் அகரத்தில் தொடங்குகின்றன; (அது போல) உலகம் கடவுளில் தொடங்குகிறது.",
      "en": "As the letter A is the first of all letters, so the eternal God is first in the world."
    }
  };
  protected readonly Object = Object;
  private readonly thirukkuralService = inject(ThirukkuralService);
  kural = signal<Thirukkural>(this.DEFAULT_KURAL);

  constructor() {
    this.thirukkuralService.getDailyKural().subscribe({
      next: data => this.kural.set(data)
    })
  }

  loadRandomKural() {
    this.thirukkuralService.getRandomKural().subscribe({
      next: data => this.kural.set(data)
    })
  }

  getNextKural() {
    const kuralId = (this.kural().number >= 1330 ? 1 : this.kural().number + 1);
    this.thirukkuralService.getKuralById(kuralId).subscribe({
      next: data => this.kural.set(data)
    })
  }

  getPreviousKural() {
    const kuralId = (this.kural().number <= 1 ? 1330 : this.kural().number - 1);
    this.thirukkuralService.getKuralById(kuralId).subscribe({
      next: data => this.kural.set(data)
    })
  }
}
