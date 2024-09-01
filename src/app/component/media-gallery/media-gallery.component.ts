import {ChangeDetectionStrategy, Component, inject, input, model, OnInit, viewChild} from '@angular/core';
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
    <div class="row row-cols-auto mt-2 me-0">
      @for (item of items(); let i = $index; track item.data?.src) {
        <div class="col mb-1"
             [lightbox]="i"
             [gallery]="galleryId()">
          <img class="rounded border border-2 border-opacity-75 journey-image-thumbnail"
               [src]="item.type == GalleryItemTypes.Image ? item.data?.src : item.data?.thumb ?? 'assets/image/default-video-thumbnail.png'"
               height="200" width="200" alt="media" loading="lazy" [matTooltip]="item.data?.args?.['title']"
               [ngClass]="{'border-success': item.data?.args?.['isThumbnail'], 'border-primary': !item.data?.args?.['isThumbnail']}"
          />
        </div>
      }
    </div>
    <ng-container *galleryImageDef="let itemData; active as active">
      <div class="h-100 w-100 text-end d-flex flex-column justify-content-end">
        <p class="text-center">{{ itemData?.args?.['title'] }}</p>
      </div>
    </ng-container>
  `,
  styles: ['.journey-image-thumbnail{object-fit: fill}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaGalleryComponent implements OnInit {
  protected readonly GalleryItemTypes = GalleryItemTypes;
  galleryId = input<string>('myLightbox');
  images = input<JourneyImagesDetails>(new JourneyImagesDetails());
  videos = input<string[] | undefined>([]);
  galleryImageDef = viewChild.required(GalleryImageDef);
  gallery = inject(Gallery);

  items = model<GalleryItem[]>([]);

  galleryConfig: GalleryConfig = {
    loadingStrategy: "lazy"
  };

  ngOnInit() {
    this.items.set(this.getGalleryItems());
    this.gallery.ref(this.galleryId(), {imageTemplate: this.galleryImageDef().templateRef, ...this.galleryConfig})
      .load(this.items());
  }

  private getGalleryItems(): GalleryItem[] {
    let collections = new Array<GalleryItem>();
    this.getImageItems()?.map(item => collections.push(item));
    this.getVideoItems()?.map(item => collections.push(item));
    return collections;
  }

  private getImageItems(): GalleryItem[] | undefined {
    return this.images()?.images.map(imageDetail => {
      return {
        type: GalleryItemTypes.Image,
        data: {
          src: imageDetail.url,
          thumb: imageDetail.url,
          args: {
            title: imageDetail.title,
            isThumbnail: imageDetail.isThumbnail
          }
        }
      };
    });
  }

  private getVideoItems(): GalleryItem[] | undefined {
    return this.videos()?.map(videoUrl =>
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

