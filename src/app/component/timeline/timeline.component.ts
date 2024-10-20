import {ChangeDetectionStrategy, Component, computed, input, signal, viewChild} from '@angular/core';
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
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent {

  timelineData = input.required<TimelineData | undefined>({alias: 'data'});
  images = computed<GalleryItem[]>(() => this.timelineData()?.images?.map(fnImageEntityToGalleryItem) ?? []);

  galleryComponent = viewChild.required(GalleryComponent);

  isPlayerRunning = signal<boolean>(true);

  togglePlayer() {
    if (this.isPlayerRunning()) {
      this.galleryComponent().stop();
      this.isPlayerRunning.set(false);
    } else {
      this.galleryComponent().next();
      this.galleryComponent().play();
      this.isPlayerRunning.set(true);
    }

  }
}
