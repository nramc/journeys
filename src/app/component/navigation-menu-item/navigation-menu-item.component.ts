import {Component, input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {PageInfo} from "../../model/page.info.model";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-navigation-menu-item',
  imports: [MatIconModule, RouterLink, RouterLinkActive, MatTooltipModule],
  templateUrl: './navigation-menu-item.component.html',
  styles: []
})
export class NavigationMenuItemComponent {
  showLabel = input<boolean>(true);
  pageInfo = input.required<PageInfo>()

}
