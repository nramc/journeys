import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavbarComponent } from './component/side-navbar/side-navbar.component';
import {LoadingSpinnerComponent} from "./component/loading-spinner/loading-spinner.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
  imports: [SideNavbarComponent, RouterOutlet, LoadingSpinnerComponent]
})
export class AppComponent implements OnInit {
  title = 'Journey';

  ngOnInit(): void {
    // Check for Windows OS
    const isWindows = navigator.userAgent.toLowerCase().indexOf('win') > -1;
    if (isWindows) {
      document.getElementsByTagName('html')?.item(0)?.classList.add('base-fs-windows');
    }
  }
}
