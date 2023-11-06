import {Component, OnInit} from '@angular/core';
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
                        [src]="item.type == GalleryItemTypes.Image ? item.data?.src:
                         item.data?.thumb ?? '/assets/image/default-video-thumbnail.png'"
                        height="150" width="150" alt="media"/>
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
            data: {src: 'https://picsum.photos/id/944/900/500'}
        });
        collections.push({
            type: GalleryItemTypes.Image,
            data: {src: 'https://picsum.photos/id/1011/900/500'}
        });
        collections.push({
            type: GalleryItemTypes.Youtube,
            data: {src: 'https://www.youtube.com/embed/OSuHTW9T57A'}
        });


        return collections;
    }

    protected readonly GalleryItemTypes = GalleryItemTypes;
}
