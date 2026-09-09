import {DOCUMENT} from '@angular/common';
import {Injectable, inject, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'journey-theme';
  private readonly _isDarkMode = signal(false);

  constructor() {
    const savedTheme = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setDarkMode(savedTheme ? savedTheme === 'dark' : prefersDark);
  }

  toggle(): void {
    this.setDarkMode(!this._isDarkMode());
  }

  isDarkMode() {
    return this._isDarkMode();
  }

  private setDarkMode(isDark: boolean): void {
    this._isDarkMode.set(isDark);
    this.document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem(this.storageKey, isDark ? 'dark' : 'light');
  }

}
