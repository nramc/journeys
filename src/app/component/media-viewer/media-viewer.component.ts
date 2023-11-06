import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-media-viewer',
  template: `
      <ngb-carousel *ngIf="images">
          <ng-template ngbSlide *ngFor="let image of images">
              <div class="picsum-img-wrapper">
                  <img [src]="image" alt="Random first slide" class="slide-media-image"/>
              </div>
              <div class="carousel-caption">
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
          </ng-template>
      </ngb-carousel>
  `,
  styles: []
})
export class MediaViewerComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    config.animation = true;
    config.wrap = false;
  }

  ngOnInit(): void {


  }

}
