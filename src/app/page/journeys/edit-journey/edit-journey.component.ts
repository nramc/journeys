import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {JourneyService} from "../../../service/journey/journey.service";
import {Observable, switchMap} from "rxjs";
import {Journey} from "../../../model/core/journey.model";

@Component({
  selector: 'app-edit-journey',
  templateUrl: './edit-journey.component.html'
})
export class EditJourneyComponent implements OnInit {
  journey$: Observable<Journey> | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private journeyService: JourneyService
  ) {
  }

  ngOnInit(): void {
    this.journey$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.journeyService.getJourneyById(params.get('id')!))
    );
  }

}
