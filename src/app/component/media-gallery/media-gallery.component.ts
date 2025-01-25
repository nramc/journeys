import {ChangeDetectionStrategy, Component, inject, input, model, OnInit, viewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LIGHTBOX_CONFIG, LightboxConfig, LightboxModule} from "ng-gallery/lightbox";
import {Gallery, GalleryImageDef, GalleryItem, GalleryItemTypes} from "ng-gallery";
import {GalleryConfig} from "ng-gallery/lib/models/config.model";
import {MatTooltipModule} from "@angular/material/tooltip";
import {JourneyImagesDetails} from "../../model/core/journey.model";

@Component({
    selector: 'app-media-gallery',
    imports: [CommonModule, LightboxModule, MatTooltipModule],
    providers: [
        {
            provide: LIGHTBOX_CONFIG,
            useValue: {
                keyboardShortcuts: true,
                startAnimationTime: 1000,
                exitAnimationTime: 1000,
                panelClass: 'fullscreen'
            } as LightboxConfig
        }
    ],
    template: `
    <div class="flex flex-wrap grow mt-2 me-0 justify-center">
      @for (item of items(); let i = $index; track item.data?.src) {
        <div class="mb-1 text-center"
             [lightbox]="i"
             [gallery]="galleryId()">
          <img class="journey-image-thumbnail"
               [src]="item.type === GalleryItemTypes.Image ? item.data?.src : item.data?.thumb ?? 'assets/image/default-video-thumbnail.png'"
               height="200" width="200" alt="media" loading="lazy" [matTooltip]="item.data?.args?.['title']"
          />
        </div>
      } @empty {
        <p class="text-gray-500 italic">
          No media available for this journey.
        </p>
      }
    </div>
    <ng-container *galleryImageDef="let itemData; active as active">
      <div class="h-full w-full text-end flex flex-col justify-end">
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
    const collections = new Array<GalleryItem>();
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

