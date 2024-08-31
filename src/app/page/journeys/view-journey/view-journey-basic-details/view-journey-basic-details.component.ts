import {Component, Input} from '@angular/core';
import {Journey} from "../../../../model/core/journey.model";
import {DatePipe, NgForOf} from "@angular/common";
import {MarkdownModule} from "ngx-markdown";
import {
  DisplayMarkdownComponent
} from "../../../../component/display-markdown-component/display-markdown.component";

@Component({
  selector: 'app-view-journey-basic-details',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    MarkdownModule,
    DisplayMarkdownComponent
  ],
  templateUrl: './view-journey-basic-details.component.html',
  styleUrl: './view-journey-basic-details.component.scss'
})
export class ViewJourneyBasicDetailsComponent {
  @Input("journey") journey!: Journey;
  trackTagByFn = (index: number, tag: string) => tag;


}
