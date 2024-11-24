import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LoadingSpinnerComponent} from "./component/loading-spinner/loading-spinner.component";
import {ThemeToggleComponent} from "./component/theme-toggle/theme-toggle.component";
import {NavigationMenuComponent} from "./component/navigation-menu/navigation-menu.component";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {HOME_PAGE_INFO} from "./model/page.info.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, LoadingSpinnerComponent, ThemeToggleComponent, NavigationMenuComponent, MatSidenavContainer, MatSidenavContent, MatSidenav, MatIcon, MatIconButton, MatToolbar, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Journey';
  protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;
}
