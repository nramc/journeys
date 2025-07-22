import {Component, inject} from '@angular/core';
import {DEFAULT_CATEGORY, Journey, JourneyImagesDetails} from "../../../model/core/journey.model";
import {ActivatedRoute} from "@angular/router";
import {JourneyService} from "../../../service/journey/journey.service";

import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {MatIcon} from "@angular/material/icon";
import {WorldMapComponent} from "../../../component/world-map/world-map.component";
import {MediaGalleryComponent} from "../../../component/media-gallery/media-gallery.component";
import {ViewJourneyBasicDetailsComponent} from "./view-journey-basic-details/view-journey-basic-details.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ViewJourneyHeaderComponent} from "./view-journey-header/view-journey-header.component";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-view-journey',
    templateUrl: './view-journey.component.html',
    imports: [
    MatTabGroup,
    MatTab,
    MatIcon,
    MatTabLabel,
    WorldMapComponent,
    MediaGalleryComponent,
    ViewJourneyBasicDetailsComponent,
    MatButtonToggleModule,
    ViewJourneyHeaderComponent
]
})
export class ViewJourneyComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly journeyService = inject(JourneyService);

  journey = toSignal(this.journeyService.getJourneyById(this.route.snapshot.params['id']), {
    initialValue: null
  });

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
