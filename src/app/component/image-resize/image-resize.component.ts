import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import JSZip from "jszip";
import {saveAs} from 'file-saver';
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatProgressSpinner} from "@angular/material/progress-spinner";


export interface ImageResource {
  dataUrl: string,
  name: string
}

@Component({
  selector: 'app-image-resize',
  standalone: true,
  imports: [
    NgForOf,
    MatProgressBar,
    MatProgressSpinner,
    NgIf
  ],
  template: `
    <section class="container">
      <legend class="gradient-text fs-5">Reduce Image Size</legend>
      <div class="d-flex flex-row">
        <div class="col">
          <input type="file" (change)="onFileChange($event)" multiple placeholder="Choose files resize"
                 class="form-control text-primary border border-primary"/>
        </div>
        <div class="col text-center" *ngIf="totalImages() > 0">
          <p class="text-primary">Resized Images: {{ resizedImages().length }}
            <span
              *ngIf="totalImages() - resizedImages().length > 0">Remaining: {{ totalImages() - resizedImages().length }}</span>
          </p>
          <mat-progress-bar *ngIf="isProcessing" mode="determinate"
                            [value]="(resizedImages().length/totalImages())*100"></mat-progress-bar>
        </div>
        <div class="col text-center">
          <button (click)="downloadAll()" *ngIf="resizedImages().length === totalImages() && totalImages() > 0"
                  class="btn btn-sm btn-outline-primary">
            Download All
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageResizeComponent {
  protected isProcessing = signal(false);
  totalImages = signal<number>(0);
  resizedImages = signal<ImageResource[]>([]);

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  onFileChange(event: any) {
    this.isProcessing.set(true);
    const files = event.target.files;
    this.totalImages.set(files.length);
    if (files.length > 0) {
      this.resizedImages.set([]);
      for (const element of files) {
        const file = element;
        const reader = new FileReader();
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        reader.onload = (e: any) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d')!;
            const maxWidth = 1920; // maximum width for the resized image
            const maxHeight = 1080; // maximum height for the resized image
            let width = img.width;
            let height = img.height;

            if (width > height) {
              if (width > maxWidth) {
                height = Math.round((height * maxWidth / width));
                width = maxWidth;
              }
            } else if (height > maxHeight) {
              width = Math.round((width * maxHeight / height));
              height = maxHeight;
            }
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);

            this.resizedImages.update(data =>
              [...data, {dataUrl: canvas.toDataURL('image/jpeg'), name: file.name}]);
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
    this.isProcessing.set(false);
  }


  downloadAll() {
    const zip = new JSZip();
    this.resizedImages().forEach((image) => {
      const imgData = image.dataUrl.split(',')[1];
      zip.file(image.name, imgData, {base64: true});
    });
    zip.generateAsync({type: 'blob'}).then((content) => {
      saveAs(content, 'resized-images.zip');
    });
  }
}
