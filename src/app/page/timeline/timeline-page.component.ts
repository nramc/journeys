import {Component} from '@angular/core';
import {TimelineComponent} from "../../component/timeline/timeline.component";
import {TimelineData} from "../../component/timeline/timeline-data.model";

@Component({
  selector: 'app-timeline-page',
  standalone: true,
  imports: [
    TimelineComponent
  ],
  templateUrl: './timeline-page.component.html',
  styleUrl: './timeline-page.component.scss'
})
export class TimelinePageComponent {
  timelineData: TimelineData = {
    heading: 'First Timeline',
    title: '2019',
    images: [
      {src: 'assets/test-data/img/2019_1.png'},
      {src: 'assets/test-data/img/2019_2.png'},
      {src: 'assets/test-data/img/2019_3.png'}
    ]
  };
}
