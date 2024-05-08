import {Component, Input} from '@angular/core';
import {PageInfo} from "../../model/page-info";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  imports: [
    NgIf
  ],
  standalone: true
})
export class PageHeaderComponent {

  @Input() pageInfo: PageInfo | undefined;

}
