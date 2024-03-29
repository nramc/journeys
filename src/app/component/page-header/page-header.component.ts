import {Component, Input} from '@angular/core';
import {PageInfo} from "../../model/page-info";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html'
})
export class PageHeaderComponent {

  @Input() pageInfo: PageInfo | undefined;

}
