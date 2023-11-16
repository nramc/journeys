import {Component, OnInit} from '@angular/core';
import {GALLERY_PAGE_INFO} from "../../model/page-info";
import {map, Observable} from "rxjs";
import {Location} from "../../model/location.model";
import {Geometry} from "geojson";
import {LocationService} from "../../service/location.service";
import {convertFeatureToLocation} from "../../utility/feature-to-location.converter";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  protected readonly GALLERY_PAGE_INFO = GALLERY_PAGE_INFO;
  location$: Observable<Location<Geometry>[]> | undefined;

  constructor(private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.location$ = this.locationService.getAllAvailableLocations()
      .pipe(map(data => data ? data.features.map(convertFeatureToLocation) : []));
  }
}
