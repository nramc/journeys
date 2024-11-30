import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [
    MatIconModule,
    MatIconButton,
    MatTooltip
  ],
  template: `
    <button mat-icon-button (click)="toggleTheme()"
            [matTooltip]="isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'">
      <mat-icon class="text-primary">
        {{ isDarkMode() ? 'dark_mode' : 'light_mode' }}
      </mat-icon>
    </button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleComponent {
  isDarkMode = signal<boolean>(false);

  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    document.body.classList.toggle('dark', prefersDark.matches);
    this.isDarkMode.set(prefersDark.matches);
  }

  toggleTheme() {
    this.isDarkMode.update(value => !value);
    document.body.classList.toggle('dark');
  }
}
