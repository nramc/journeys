import {Component, OnInit} from '@angular/core';
import {PageInfo} from "../../model/page-info";
import {LocationService} from "../../service/location.service";
import {ActivatedRoute} from "@angular/router";
import {Geometry} from "geojson";
import {Location} from "../../model/location.model";
import {convertFeatureToLocation} from "../../utility/feature-to-location.converter";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  defaultDescription: string = 'Remember that happiness is a way of travel, not a destination.';

  location$: Observable<Location<Geometry> | undefined> | undefined;

  constructor(private locationService: LocationService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const locationId = this.route.snapshot.params['id'];
    console.log(locationId);

    this.location$ = this.locationService.getLocationById(locationId)
      .pipe(map(data => data ? convertFeatureToLocation(data) : undefined));


  }

  getPageInfo(location: Location<Geometry>): PageInfo {
    return {
      title: location.name,
      name: location.name,
      description: location?.rawProperties?.['description'] || this.defaultDescription,
      path: "/place/" + location?.id
    };
  }

  getImages(location: Location<Geometry>): string[] {
    let images = new Array<string>()
    for (let eventEntry of location.events) {
      eventEntry.images?.map(img => images.push(img));
    }
    return images;
  }

  getVideos(location: Location<Geometry>): string[] {
    let videos = new Array<string>()
    for (let eventEntry of location.events) {
      eventEntry.videos?.map(vid => videos.push(vid));
    }
    return videos;
  }
}
