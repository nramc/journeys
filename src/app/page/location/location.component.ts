import {Component, OnInit} from '@angular/core';
import {PageInfo} from "../../model/page-info";
import {LocationService} from "../../service/location.service";
import {ActivatedRoute} from "@angular/router";
import {Feature} from "geojson";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  defaultDescription: string = 'Remember that happiness is a way of travel, not a destination.';
  locationInfo: PageInfo | undefined;
  location: Feature | undefined;

  constructor(private locationService: LocationService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const locationId = this.route.snapshot.params['id'];
    console.log(locationId)
    this.locationService.getLocationById(locationId)
      .subscribe(data => data ? this.dataReceivedCallback(data) : console.warn("Location not exists"));

  }

  private dataReceivedCallback(data: Feature) {
    this.location = data;
    this.locationInfo = {
      title: data?.properties?.['name'],
      name: data?.properties?.['name'],
      description: data?.properties?.['description'] || this.defaultDescription,
      path: "/place/" + data?.id
    };
  }
}
