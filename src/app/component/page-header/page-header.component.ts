import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {PageInfo} from "../../model/page.info.model";

@Component({
    selector: 'app-page-header',
    template: `
    <div class="max-sm:text-center">
      <h3 class="page-title text-primary">{{ pageInfo().title }}</h3>
    </div>
  `,
    styles: `
    .page-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }`,
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent {

  pageInfo = input.required<PageInfo>();

}
