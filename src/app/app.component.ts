import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideNavbarComponent} from './component/side-navbar/side-navbar.component';
import {LoadingSpinnerComponent} from "./component/loading-spinner/loading-spinner.component";
import {ThemeToggleComponent} from "./component/theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [SideNavbarComponent, RouterOutlet, LoadingSpinnerComponent, ThemeToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Journey';
}
