import {Component, Input, ViewChild} from '@angular/core';
import {GalleryComponent, GalleryItem, GalleryModule, ImageItem} from "ng-gallery";
import {TimelineData} from "./timeline-data.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [GalleryModule, NgIf],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  timelineData: TimelineData | undefined;

  @Input({alias: "data", required: true})
  set setImageData(timelineData: TimelineData | undefined) {
    this.timelineData = timelineData;
    this.images = this.getImageItems(timelineData);
  }

  images: GalleryItem[] = [];
  @ViewChild(GalleryComponent) gallery!: GalleryComponent;

  isPlayerRunning: boolean = false;

  getImageItems(timelineData: TimelineData | undefined) {
    if (timelineData && timelineData.images?.length > 0) {
      return timelineData.images.map(data => new ImageItem({
        src: data.src,
        args: {caption: data.caption, title: data.title, ...data.args}
      }));
    } else {
      return [];
    }
  }

  togglePlayer() {
    if (this.isPlayerRunning) {
      this.gallery.stop();
      this.isPlayerRunning = false;
    } else {
      this.gallery.next();
      this.gallery.play();
      this.isPlayerRunning = true;
    }

  }
}
