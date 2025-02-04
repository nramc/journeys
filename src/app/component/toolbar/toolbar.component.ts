import {Component, inject, output} from '@angular/core';
import {HOME_PAGE_INFO, LOGOUT_PAGE_INFO} from "../../model/page.info.model";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatToolbar} from "@angular/material/toolbar";
import {MatTooltip} from "@angular/material/tooltip";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ThemeToggleComponent} from "../theme-toggle/theme-toggle.component";
import {AuthService} from "../../service/auth/auth.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-toolbar',
  imports: [
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatToolbar,
    MatTooltip,
    NgIf,
    RouterLink,
    ThemeToggleComponent,
    MatMenuTrigger,
    NgOptimizedImage
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;
  protected readonly LOGOUT_PAGE_INFO = LOGOUT_PAGE_INFO;
  toggleNavigation = output<void>()

  authService = inject(AuthService);
  isUserAuthenticated = toSignal(this.authService.isUserAuthenticatedAsObservable(), {initialValue: false});

}
