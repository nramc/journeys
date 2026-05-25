import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoadingSpinnerComponent} from "./component/loading-spinner/loading-spinner.component";
import {NavigationMenuComponent} from "./component/navigation-menu/navigation-menu.component";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {ToolbarComponent} from "./component/toolbar/toolbar.component";
import {BreakpointObserver} from "@angular/cdk/layout";
import {map} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {ScrollToTopComponent} from "./component/scroll-to-top/scroll-to-top.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, LoadingSpinnerComponent, NavigationMenuComponent, MatSidenavContainer, MatSidenavContent, MatSidenav, ToolbarComponent, FormsModule, MatIconModule, ScrollToTopComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Journey';
  private readonly observer = inject(BreakpointObserver);

  isMobile = toSignal(
    this.observer.observe(['(max-width: 768px)']).pipe(map((res) => res.matches)),
    {initialValue: false}
  );

  /** true = desktop nav shows full labels; false = icon-only */
  navExpanded = signal(false);

  /** true = mobile drawer is open */
  navOpen = signal(false);

  /** Show labels when mobile (drawer overlay) OR desktop with labels expanded */
  showNavLabel = computed(() => this.isMobile() || this.navExpanded());

  /**
   * Toolbar hamburger handler.
   * - Mobile: toggles the overlay drawer open/closed.
   * - Desktop: toggles between icon-only and full-label nav.
   */
  toggleNavigation(): void {
    if (this.isMobile()) {
      this.navOpen.update(v => !v);
    } else {
      this.navExpanded.update(v => !v);
    }
  }

  /**
   * Called when a nav item link is clicked.
   * - Mobile: closes the overlay drawer so the page is fully visible.
   * - Desktop: collapses back to icon-only so the page is fully visible.
   */
  onNavigationLinkClick(): void {
    if (this.isMobile()) {
      this.navOpen.set(false);
    } else {
      this.navExpanded.set(false);
    }
  }
}
