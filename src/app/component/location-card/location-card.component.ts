import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Location} from "../../model/location.model";
import {Geometry} from "geojson";
import {Router} from "@angular/router";

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss'
})
export class LocationCardComponent {

  @Input("location") location: Location<Geometry> | undefined;

  constructor(private router: Router) {
  }

  gotoLocation() {
    this.router.navigate(['/place', this.location?.id, {}]);
  }

}
