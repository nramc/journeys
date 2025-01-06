import {ChangeDetectionStrategy, Component, computed, input, signal, viewChild} from '@angular/core';
import {GalleryComponent, GalleryItem, GalleryModule, ImageItem} from "ng-gallery";
import {TimelineData, TimelineImage} from "./timeline-data.model";
import {NgIf} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

export function fnImageEntityToGalleryItem(data: TimelineImage): GalleryItem {
  return new ImageItem({
    src: data.src,
    args: {caption: data.caption, title: data.title, ...data.args}
  });
}

@Component({
    selector: 'app-timeline',
    imports: [GalleryModule, NgIf, MatTooltip, MatIconModule, MatButtonModule],
    templateUrl: './timeline.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent {

  data = input.required<TimelineData | undefined>();
  images = computed<GalleryItem[]>(() => this.data()?.images?.map(fnImageEntityToGalleryItem) ?? []);

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
