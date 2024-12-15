import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {NgIf} from "@angular/common";
import JSZip from "jszip";
import {saveAs} from 'file-saver';
import {MatFormFieldModule} from "@angular/material/form-field";


export interface ImageResource {
  dataUrl: string,
  name: string
}

@Component({
    selector: 'app-image-resize',
    imports: [
        NgIf,
        MatFormFieldModule
    ],
    template: `
    <section class="container mx-auto">
      <h2 class="text-lg text-primary font-semibold p-4 ps-0 mb-4">Reduce Image Size</h2>
      <div class="flex flex-col md:flex-row gap-4">
        <div class="md:w-1/3 block w-full text-sm mr-4 py-2 px-4 rounded-lg border-collapse hover:bg-white">
          <input
            type="file"
            (change)="onFileChange($event)"
            multiple
            placeholder="Choose files resize"
            class="w-full border text-primary px-4 py-2 rounded"
          />
        </div>


        <div class="w-full md:w-1/3 text-center" *ngIf="totalImages() > 0">
          <p class="text-blue-500">
            Resized Images: {{ resizedImages().length }}
            <span *ngIf="totalImages() - resizedImages().length > 0">
          Remaining: {{ totalImages() - resizedImages().length }}
        </span>
          </p>
          <div *ngIf="isProcessing">
            <progress
              class="w-full h-2 rounded bg-gray-200"
              [value]="(resizedImages().length / totalImages()) * 100"
              max="100"
            ></progress>
          </div>
        </div>

        <div class="w-full md:w-1/3 text-center">
          <button
            (click)="downloadAll()"
            *ngIf="resizedImages().length === totalImages() && totalImages() > 0"
            class="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white"
          >
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFileChange(event: any) {
    this.isProcessing.set(true);
    const files = event.target.files;
    this.totalImages.set(files.length);
    if (files.length > 0) {
      this.resizedImages.set([]);
      for (const element of files) {
        const file = element;
        const reader = new FileReader();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
