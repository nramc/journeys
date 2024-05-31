import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {HOME_PAGE_INFO} from "../../model/page.info.model";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {AuthService} from "../../service/auth/auth.service";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {environment} from "../../../environments/environment";
import {BffService} from "../../service/bff/bff.service";
import {ActivatedRoute} from "@angular/router";
import {exhaustMap, mergeMap} from "rxjs";
import {TimelineService} from "../../service/timeline/timeline.service";
import {TimelineData} from "../../component/timeline/timeline-data.model";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {TimelineComponent} from "../../component/timeline/timeline.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    PageHeaderComponent,
    AsyncPipe,
    NgIf,
    JsonPipe,
    TimelineComponent
  ],
  standalone: true
})
export class HomeComponent implements OnInit {
  protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;
  appVersion = environment.version;
  bffApiVersion: string | 'CHECKING' | 'NOT_AVAILABLE' = 'CHECKING';
  timelineData: TimelineData | undefined;

  private destroyRef = inject(DestroyRef);


  constructor(
    protected authService: AuthService,
    private bffService: BffService,
    private activatedRoute: ActivatedRoute,
    private timelineService: TimelineService
  ) {
  }

  ngOnInit(): void {
    // BFF Service availability check
    this.activatedRoute.params
      .pipe(exhaustMap(__ => this.bffService.getVersion()))
      .subscribe({
        next: result => this.bffApiVersion = 'v' + result.version,
        error: err => {
          console.error(err);
          this.bffApiVersion = 'NOT_AVAILABLE';
        }
      });

    // Today in history timeline data
    this.authService.getUserContext()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        mergeMap(_ => this.timelineService.getTimelineForToday())
      ).subscribe({
      next: data => this.timelineData = data,
      error: err => console.error(err)
    });
  }

}

