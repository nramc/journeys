import {Component, output} from '@angular/core';
import {HOME_PAGE_INFO, LOGOUT_PAGE_INFO} from "../../model/page.info.model";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbar} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ToolbarActionsComponent} from "./toolbar-actions/toolbar-actions.component";

@Component({
  selector: 'app-toolbar',
  imports: [
    MatIcon,
    MatIconButton,
    MatMenuModule,
    MatToolbar,
    RouterLink,
    NgOptimizedImage,
    ToolbarActionsComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;
  protected readonly LOGOUT_PAGE_INFO = LOGOUT_PAGE_INFO;
  toggleNavigation = output<void>()

}
