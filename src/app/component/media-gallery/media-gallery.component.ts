import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LightboxDirective} from "ng-gallery/lightbox";
import {Gallery, GalleryItem, GalleryItemTypes} from "ng-gallery";

@Component({
  selector: 'app-media-gallery',
  standalone: true,
  imports: [CommonModule, LightboxDirective, NgOptimizedImage],
  template: `
    <div class="row row-cols-auto">
      <div class="col"
           *ngFor="let item of items; let i = index"
           [lightbox]="i"
           [gallery]="galleryId">
        <img
          [src]="item.type == GalleryItemTypes.Image ? item.data?.src : item.data?.thumb ?? '/assets/image/default-video-thumbnail.png'"
          height="150" width="150" alt="media"/>
      </div>
    </div>
  `,
  styles: []
})
export class MediaGalleryComponent implements OnInit {
  protected readonly GalleryItemTypes = GalleryItemTypes;
  @Input("galleryId") galleryId: string = 'myLightbox';
  @Input("images") images: string[] | undefined = [];
  @Input("videos") videos: string[] | undefined = [];

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
        thumb: '/assets/image/default-video-thumbnail.png'
      }
    };
  }
}

