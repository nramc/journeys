import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-scroll-to-top',
  imports: [MatButtonModule, MatIconModule],
  template: `
    <button mat-icon-button color="primary" (click)="scrollToTop()">
      <mat-icon>keyboard_control_key</mat-icon>
    </button>`,
  styles: `
    :host {
      position: fixed;
      float: right;
      cursor: pointer;
      right: 14px;
      bottom: 14px;
      z-index: 100;
      opacity: 0.75;
    }
    :host:hover {
      opacity: 1;
    }
    .mat-mdc-mini-fab.mat-primary {
      background-color: transparent;
    }
  `
})
export class ScrollToTopComponent {

  scrollToTop() {
    document.getElementsByTagName('main')[0]?.scrollIntoView({behavior: 'smooth'});
  }

}
