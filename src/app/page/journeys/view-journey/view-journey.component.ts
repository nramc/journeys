import {Component, inject, OnInit} from '@angular/core';
import {DEFAULT_CATEGORY, Journey, JourneyImagesDetails} from "../../../model/core/journey.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {JourneyService} from "../../../service/journey/journey.service";
import {Observable, switchMap} from "rxjs";
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {AsyncPipe, DatePipe, NgIf} from "@angular/common";
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {MatIcon} from "@angular/material/icon";
import {WorldMapComponent} from "../../../component/world-map/world-map.component";
import {MediaGalleryComponent} from "../../../component/media-gallery/media-gallery.component";
import {ViewJourneyBasicDetailsComponent} from "./view-journey-basic-details/view-journey-basic-details.component";
import {HasWriteAccessDirective} from "../../../directive/has-write-access.directive";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTooltip} from "@angular/material/tooltip";
import {ViewJourneyHeaderComponent} from "./view-journey-header/view-journey-header.component";

@Component({
  selector: 'app-view-journey',
  templateUrl: './view-journey.component.html',
  imports: [
    PageHeaderComponent,
    NgIf,
    MatTabGroup,
    MatTab,
    MatIcon,
    MatTabLabel,
    WorldMapComponent,
    MediaGalleryComponent,
    AsyncPipe,
    ViewJourneyBasicDetailsComponent,
    HasWriteAccessDirective,
    MatButtonToggleModule,
    MatTooltip,
    DatePipe,
    ViewJourneyHeaderComponent
  ],
  standalone: true
})
export class ViewJourneyComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly journeyService = inject(JourneyService);

  journey$: Observable<Journey> | undefined;


  ngOnInit(): void {
    this.journey$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.journeyService.getJourneyById(params.get('id')!))
    );
  }


  getImages(journey: Journey): JourneyImagesDetails {
    return journey.imagesDetails ?? new JourneyImagesDetails();
  }

  getVideos(journey: Journey) {
    const videos = new Array<string>()
    journey.videosDetails?.videos?.map(videoDetail => videos.push(videoDetail.videoId));
    return videos;
  }

  protected readonly DEFAULT_CATEGORY = DEFAULT_CATEGORY;
}
