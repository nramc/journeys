import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideNavbarComponent} from './component/side-navbar/side-navbar.component';
import {LoadingSpinnerComponent} from "./component/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [SideNavbarComponent, RouterOutlet, LoadingSpinnerComponent]
})
export class AppComponent {
  title = 'Journey';
}
