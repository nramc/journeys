import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {ThemeService} from "../../service/theme/theme.service";

@Component({
  selector: 'app-theme-toggle',
  imports: [
    MatIconModule,
    MatIconButton,
    MatTooltip
  ],
  template: `
    <button mat-icon-button (click)="toggleTheme()"
            [matTooltip]="this.themeService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'">
      <mat-icon class="text-primary">
        {{ this.themeService.isDarkMode() ? 'dark_mode' : 'light_mode' }}
      </mat-icon>
    </button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);

  constructor() {
    document.body.classList.toggle('dark', this.themeService.isDarkMode());
  }

  toggleTheme() {
    this.themeService.toggle();
    document.body.classList.toggle('dark');
  }
}
