import {Component, OnInit} from '@angular/core';
import {TimelineComponent} from "../../component/timeline/timeline.component";
import {TimelineData} from "../../component/timeline/timeline-data.model";
import {TimelineService} from "../../service/timeline/timeline.service";

@Component({
  selector: 'app-timeline-page',
  standalone: true,
  imports: [
    TimelineComponent
  ],
  templateUrl: './timeline-page.component.html',
  styleUrl: './timeline-page.component.scss'
})
export class TimelinePageComponent implements OnInit {
  timelineData: TimelineData | undefined;

  constructor(private timelineService: TimelineService) {
  }

  ngOnInit(): void {
    this.timelineService.getTimeline()
      .subscribe({
        next: data => this.timelineData = data,
        error: err => console.error(err)
      })
  }


}