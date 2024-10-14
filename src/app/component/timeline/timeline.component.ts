import {Component, computed, input, ViewChild} from '@angular/core';
import {GalleryComponent, GalleryItem, GalleryModule, ImageItem} from "ng-gallery";
import {TimelineData, TimelineImage} from "./timeline-data.model";
import {NgIf} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";

export function fnImageEntityToGalleryItem(data: TimelineImage): GalleryItem {
  return new ImageItem({
    src: data.src,
    args: {caption: data.caption, title: data.title, ...data.args}
  });
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [GalleryModule, NgIf, MatTooltip],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

  timelineData = input.required<TimelineData | undefined>({alias: 'data'});
  images = computed<GalleryItem[]>(() => this.timelineData()?.images?.map(fnImageEntityToGalleryItem) ?? []);

  @ViewChild(GalleryComponent) gallery!: GalleryComponent;

  isPlayerRunning: boolean = true;

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
