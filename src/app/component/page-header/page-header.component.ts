import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {PageInfo} from "../../model/page.info.model";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styles: `
    .page-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }`,
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent {

  pageInfo = input.required<PageInfo>();

}
