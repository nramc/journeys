import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LightboxDirective} from "ng-gallery/lightbox";
import {Gallery, GalleryItem, GalleryItemTypes} from "ng-gallery";
import {GalleryConfig} from "ng-gallery/lib/models/config.model";

@Component({
  selector: 'app-media-gallery',
  standalone: true,
  imports: [CommonModule, LightboxDirective, NgOptimizedImage],
  template: `
    <div class="row row-cols-auto mt-2">
      <div class="col mb-1"
           *ngFor="let item of items; let i = index; trackBy: trackMediaByFn"
           [lightbox]="i"
           [gallery]="galleryId">
        <img class="rounded border border-primary border-2 border-opacity-50 journey-image-thumbnail"
          [src]="item.type == GalleryItemTypes.Image ? item.data?.src : item.data?.thumb ?? 'assets/image/default-video-thumbnail.png'"
          height="200" width="200" alt="media" loading="lazy" />
      </div>
    </div>
  `,
  styles: ['.journey-image-thumbnail{object-fit: cover}']
})
export class MediaGalleryComponent implements OnInit {
  protected readonly GalleryItemTypes = GalleryItemTypes;
  @Input("galleryId") galleryId: string = 'myLightbox';
  @Input("images") images: string[] | undefined = [];
  @Input("videos") videos: string[] | undefined = [];

  items: GalleryItem[] = [];
  galleryConfig: GalleryConfig = {
    loadingStrategy: "lazy"
  };
  trackMediaByFn = (index: number, item: GalleryItem) => item.data?.src;

  constructor(public gallery: Gallery) {
  }

  ngOnInit() {
    this.items = this.getGalleryItems();
    const galleryRef = this.gallery.ref(this.galleryId, this.galleryConfig);
    galleryRef.load(this.items);
  }

  private getGalleryItems(): GalleryItem[] {
    let collections = new Array<GalleryItem>();
    this.getImageItems()?.map(item => collections.push(item));
    this.getVideoItems()?.map(item => collections.push(item));
    return collections;
  }

  private getImageItems(): GalleryItem[] | undefined {
    return this.images?.map(imageUrl => {
      return {
        type: GalleryItemTypes.Image,
        data: {src: imageUrl, thumb: imageUrl}
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

