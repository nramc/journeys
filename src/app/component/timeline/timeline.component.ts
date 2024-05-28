import {Component, Input, OnInit, ViewChild} from '@angular/core';
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
export class TimelineComponent implements OnInit {
  @Input({alias: "data", required: true}) timelineData: TimelineData | undefined;
  images: GalleryItem[] = [];
  @ViewChild(GalleryComponent) gallery!: GalleryComponent;

  isPlayerRunning: boolean = false;

  ngOnInit(): void {
    this.images = this.getImageItems();
  }

  getImageItems() {
    if (this.timelineData && this.timelineData.images?.length > 0) {
      return this.timelineData.images.map(data => new ImageItem({
        src: data.src,
        args: Object.assign({caption: data.caption}, data.args)
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
