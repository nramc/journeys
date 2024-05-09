import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LightboxDirective} from "ng-gallery/lightbox";
import {Gallery, GalleryImageDef, GalleryItem, GalleryItemTypes} from "ng-gallery";
import {GalleryConfig} from "ng-gallery/lib/models/config.model";
import {MatTooltipModule} from "@angular/material/tooltip";
import {JourneyImagesDetails} from "../../model/core/journey.model";

@Component({
  selector: 'app-media-gallery',
  standalone: true,
  imports: [CommonModule, LightboxDirective, NgOptimizedImage, MatTooltipModule, GalleryImageDef],
  template: `
    <div class="row row-cols-auto mt-2">
      <div class="col mb-1"
           *ngFor="let item of items; let i = index; trackBy: trackMediaByFn"
           [lightbox]="i"
           [gallery]="galleryId">
        <img class="rounded border border-primary border-2 border-opacity-50 journey-image-thumbnail"
             [src]="item.type == GalleryItemTypes.Image ? item.data?.src : item.data?.thumb ?? 'assets/image/default-video-thumbnail.png'"
             height="200" width="200" alt="media" loading="lazy" [matTooltip]="item.data?.args?.['title']"/>
      </div>
    </div>
    <ng-container *galleryImageDef="let itemData; active as active">
      <div class="h-100 w-100 text-end d-flex flex-column justify-content-end">
        <p class="text-center">{{ itemData?.args?.['title'] }}</p>
      </div>
    </ng-container>
  `,
  styles: ['.journey-image-thumbnail{object-fit: fill}']
})
export class MediaGalleryComponent implements OnInit {
  protected readonly GalleryItemTypes = GalleryItemTypes;
  @Input("galleryId") galleryId: string = 'myLightbox';
  @Input("images") imagesDetails: JourneyImagesDetails = new JourneyImagesDetails();
  @Input("videos") videos: string[] | undefined = [];
  @ViewChild(GalleryImageDef, {static: true}) imageDef!: GalleryImageDef;

  items: GalleryItem[] = [];
  galleryConfig: GalleryConfig = {
    loadingStrategy: "lazy"
  };
  trackMediaByFn = (index: number, item: GalleryItem) => item.data?.src;

  constructor(public gallery: Gallery) {
  }

  ngOnInit() {
    this.items = this.getGalleryItems();
    this.gallery.ref(this.galleryId, Object.assign({
        imageTemplate: this.imageDef.templateRef
      }, this.galleryConfig)
    )
      .load(this.items);
  }

  private getGalleryItems(): GalleryItem[] {
    let collections = new Array<GalleryItem>();
    this.getImageItems()?.map(item => collections.push(item));
    this.getVideoItems()?.map(item => collections.push(item));
    return collections;
  }

  private getImageItems(): GalleryItem[] | undefined {
    return this.imagesDetails?.images.map(imageDetail => {
      return {
        type: GalleryItemTypes.Image,
        data: {
          src: imageDetail.url,
          thumb: imageDetail.url,
          args: {
            title: imageDetail.assetId
          }
        }
      };
    });
  }

  private getVideoItems(): GalleryItem[] | undefined {
    return this.videos?.map(videoUrl =>
      this.isItYoutubeVideoId(videoUrl) ?
        this.newYoutubeItem(videoUrl) :
        this.newVideoItem(videoUrl));
  }

  isItYoutubeVideoId(videoUrl: string) {
    // does not contain any file extension and does not contain any url path (/)
    return videoUrl.indexOf('.') == -1 && videoUrl.indexOf("/") == -1;
  }

  private newYoutubeItem(videoId: string): GalleryItem {
    return {
      type: GalleryItemTypes.Youtube,
      data: {
        src: `https://www.youtube.com/embed/${videoId}`,
        thumb: `https://img.youtube.com/vi/${videoId}/0.jpg`,
        params: {
          "loop": 1,
          "playlist": videoId,
          "rel": 0,
          "controls": 1
        }
      }
    };
  }

  private newVideoItem(videoUrl: string): GalleryItem {
    return {
      type: GalleryItemTypes.Iframe,
      data: {
        src: videoUrl,
        thumb: 'assets/image/default-video-thumbnail.png'
      }
    };
  }
}

