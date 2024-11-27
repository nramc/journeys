import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoadingSpinnerComponent} from "./component/loading-spinner/loading-spinner.component";
import {NavigationMenuComponent} from "./component/navigation-menu/navigation-menu.component";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {ToolbarComponent} from "./component/toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, LoadingSpinnerComponent, NavigationMenuComponent, MatSidenavContainer, MatSidenavContent, MatSidenav, ToolbarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Journey';
}
