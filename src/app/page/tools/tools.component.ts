import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ImageResizeComponent} from "../../component/image-resize/image-resize.component";
import {TOOLS_PAGE_INFO} from "../../model/page.info.model";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [
    ImageResizeComponent,
    PageHeaderComponent
  ],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolsComponent {
  protected readonly TOOLS_PAGE_INFO = TOOLS_PAGE_INFO;
}
