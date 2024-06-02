import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import JSZip from "jszip";
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-image-resize',
  standalone: true,
  imports: [
    NgForOf
  ],
  template: `
    <section class="container">
      <legend class="gradient-text fs-5">Reduce Image Size</legend>
      <div class="d-flex flex-row">
        <div class="col">
          <input type="file" (change)="onFileChange($event)" multiple placeholder="Choose files resize"
                 class="form-control text-primary border border-primary"/>
        </div>
        <div class="col text-center">
          <p class="text-primary">Resized Images: {{ resizedImages.length }}</p>
        </div>
        <div class="col text-center">
          <button (click)="downloadAll()" [disabled]="resizedImages.length == 0" class="btn btn-sm btn-outline-primary">Download All</button>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ImageResizeComponent {
  protected isProcessing = false;
  resizedImages: { dataUrl: string, name: string }[] = [];

  onFileChange(event: any) {
    this.isProcessing = true;
    const files = event.target.files;
    if (files.length > 0) {
      this.resizedImages = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
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
                height = Math.round((height *= maxWidth / width));
                width = maxWidth;
              }
            } else {
              if (height > maxHeight) {
                width = Math.round((width *= maxHeight / height));
                height = maxHeight;
              }
            }
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);

            this.resizedImages.push({ dataUrl: canvas.toDataURL('image/jpeg'), name: file.name });
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
    this.isProcessing = false;
  }


  downloadAll() {
    const zip = new JSZip();
    this.resizedImages.forEach((image, index) => {
      const imgData = image.dataUrl.split(',')[1];
      zip.file(`resized-image-${index + 1}.jpg`, imgData, { base64: true });
    });
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'resized-images.zip');
    });
  }
}
