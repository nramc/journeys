import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly _isDarkMode = signal(false);

  constructor() {
    this._isDarkMode.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  toggle() {
    this._isDarkMode.update(data => !data);
  }

  isDarkMode() {
    return this._isDarkMode();
  }

}
