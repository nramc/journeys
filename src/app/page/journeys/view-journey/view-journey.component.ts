import {Component, OnInit} from '@angular/core';
import {Journey, JourneyImagesDetails} from "../../../model/core/journey.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {JourneyService} from "../../../service/journey/journey.service";
import {Observable, switchMap} from "rxjs";
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {VIEW_JOURNEY_PAGE_INFO} from "../../../model/page.info.model";
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {MatIcon} from "@angular/material/icon";
import {WorldMapComponent} from "../../../component/world-map/world-map.component";
import {MediaGalleryComponent} from "../../../component/media-gallery/media-gallery.component";
import {ViewJourneyBasicDetailsComponent} from "./view-journey-basic-details/view-journey-basic-details.component";
import {HasWriteAccessDirective} from "../../../directive/has-write-access.directive";

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
    HasWriteAccessDirective
  ],
  standalone: true
})
export class ViewJourneyComponent implements OnInit {
  protected readonly VIEW_JOURNEY_PAGE_INFO = VIEW_JOURNEY_PAGE_INFO;
  journey$: Observable<Journey> | undefined;

  constructor(
    private route: ActivatedRoute,
    private journeyService: JourneyService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.journey$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.journeyService.getJourneyById(params.get('id')!))
    );
  }


  getImages(journey: Journey): JourneyImagesDetails {
    return journey.extendedDetails?.imagesDetails ?? new JourneyImagesDetails();
  }

  getVideos(journey: Journey) {
    let videos = new Array<string>()
    journey.extendedDetails?.videosDetails?.videos?.map(videoDetail => videos.push(videoDetail.videoId));
    return videos;
  }

  editJourney(journey: Journey) {
    this.router.navigate(['/journey', journey.id, 'edit']).then();
  }
}
