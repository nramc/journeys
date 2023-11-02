import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LightboxDirective} from "ng-gallery/lightbox";
import {Gallery, GalleryItem, GalleryItemTypes} from "ng-gallery";

@Component({
  selector: 'app-media-gallery',
  standalone: true,
  imports: [CommonModule, LightboxDirective],
  template: `
    <div class="row row-cols-auto">
      <div class="col"
           *ngFor="let item of items; let i = index"
           [lightbox]="i"
           [gallery]="galleryId">
        <img [src]="item.data?.src" height="150" width="150" alt="image"/>
      </div>
    </div>
  `,
  styles: []
})
export class MediaGalleryComponent implements OnInit {
  galleryId = 'myLightbox';
  items: GalleryItem[] = [];

  constructor(public gallery: Gallery) {
  }

  ngOnInit() {
    this.items = this.getGalleryItems();
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.items);
  }

  private getGalleryItems(): GalleryItem[] {
    let collections = new Array<GalleryItem>();

    collections.push({
      type: GalleryItemTypes.Image,
      data: {src: 'https://picsum.photos/id/944/900/500', thumb: 'https://picsum.photos/id/944/900/500'}
    });
    collections.push({
      type: GalleryItemTypes.Image,
      data: {src: 'https://picsum.photos/id/1011/900/500', thumb: 'https://picsum.photos/id/1011/900/500'}
    });
    collections.push({
      type: GalleryItemTypes.Image,
      data: {src: 'https://picsum.photos/id/984/900/500', thumb: 'https://picsum.photos/id/984/900/500'}
    });


    return collections;
  }
}
