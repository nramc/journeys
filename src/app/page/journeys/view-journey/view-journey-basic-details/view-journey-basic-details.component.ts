import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {Journey} from "../../../../model/core/journey.model";
import {MarkdownModule} from "ngx-markdown";
import {DisplayMarkdownComponent} from "../../../../component/display-markdown-component/display-markdown.component";

@Component({
    selector: 'app-view-journey-basic-details',
    imports: [
        MarkdownModule,
        DisplayMarkdownComponent
    ],
    templateUrl: './view-journey-basic-details.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewJourneyBasicDetailsComponent {
  journey = input.required<Journey>();

}
