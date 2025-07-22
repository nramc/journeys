import {Component} from '@angular/core';
import {MatIconButton} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {RouterLink} from "@angular/router";
import {ThemeToggleComponent} from "../../theme-toggle/theme-toggle.component";
import {LOGOUT_PAGE_INFO} from "../../../model/page.info.model";
import {HasAnonymousDirective} from "../../../directive/has-anonymous.directive";
import {HasAuthenticatedDirective} from "../../../directive/has-authenticated.directive";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-toolbar-actions',
  imports: [
    MatIconModule,
    MatIconButton,
    MatMenuModule,
    MatTooltipModule,
    RouterLink,
    ThemeToggleComponent,
    HasAnonymousDirective,
    HasAuthenticatedDirective
  ],
  templateUrl: './toolbar-actions.component.html',
  styles: []
})
export class ToolbarActionsComponent {

  protected readonly LOGOUT_PAGE_INFO = LOGOUT_PAGE_INFO;
}
