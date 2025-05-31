import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoadingSpinnerComponent} from "./component/loading-spinner/loading-spinner.component";
import {NavigationMenuComponent} from "./component/navigation-menu/navigation-menu.component";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {ToolbarComponent} from "./component/toolbar/toolbar.component";
import {BreakpointObserver} from "@angular/cdk/layout";
import {map} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, LoadingSpinnerComponent, NavigationMenuComponent, MatSidenavContainer, MatSidenavContent, MatSidenav, ToolbarComponent, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Journey';
  private readonly observer = inject(BreakpointObserver);
  isMobile = toSignal(
    this.observer.observe(['(max-width: 768px)']).pipe(map((res) => res.matches)),
    {initialValue: false}
  );

}
