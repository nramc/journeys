import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {PageInfo} from "../../model/page.info.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  imports: [NgIf],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent {

  pageInfo = input.required<PageInfo>();

}
