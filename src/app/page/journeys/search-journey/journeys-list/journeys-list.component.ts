import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
  viewChild
} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortModule, SortDirection} from "@angular/material/sort";
import {HttpParams} from "@angular/common/http";
import {merge, Observable, startWith, switchMap} from "rxjs";
import {JourneyService} from "../../../../service/journey/journey.service";
import {JourneyPage} from "../../../../service/journey/journey-page.type";
import {Journey} from "../../../../model/core/journey.model";
import {Router} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {DatePipe} from "@angular/common";
import {toObservable} from "@angular/core/rxjs-interop";
import {HasWriteAccessDirective} from "../../../../directive/has-write-access.directive";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-journeys-list',
  templateUrl: './journeys-list.component.html',
  styleUrl: './journeys-list.component.scss',
  imports: [
    DatePipe,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HasWriteAccessDirective,
    MatIconModule,
    MatButtonModule,
    MatTooltip
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneysListComponent implements AfterViewInit {
  displayedColumns: string[] = ['createdDate', 'name', 'category', 'journeyDate', 'published', 'action'];

  paginator = viewChild.required(MatPaginator);
  sort = viewChild.required(MatSort);
  criteria = input.required<string>();
  criteria$ = toObservable(this.criteria)
  data = signal<JourneyPage>({
    content: [],
    numberOfElements: 0,
    totalElements: 0,
    totalPages: 0
  });
  resultsLength = computed(() => this.data().totalElements);

  private readonly journeyService = inject(JourneyService);
  private readonly router = inject(Router);

  searchJourneys(queryString: string, sort: string, order: SortDirection, page: number, pageSize: number): Observable<JourneyPage> {

    let params = new HttpParams();
    params = params.set("q", queryString);
    params = params.set("sort", sort);
    params = params.set("order", order.toUpperCase());
    params = params.set("pageIndex", page);
    params = params.set("pageSize", pageSize);

    return this.journeyService.getAllJourneys(params);
  }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort().sortChange.subscribe(() => this.paginator().pageIndex = 0);

    merge(this.criteria$, this.sort().sortChange, this.paginator().page)
      .pipe(
        startWith(),
        switchMap(() => this.searchJourneys(
            this.criteria(),
            this.sort().active,
            this.sort().direction,
            this.paginator().pageIndex,
            this.paginator().pageSize
          )
        ),
      )
      .subscribe(this.data.set);
  }

  viewJourney(row: Journey) {
    this.router.navigate(['/journey', row.id, 'view']).then(console.log);
  }

  editJourney(row: Journey) {
    this.router.navigate(['/journey', row.id, 'edit']).then(console.log);
  }

  trackJourney(_: number, item: Journey): string {
    return `${item.id}`;
  }
}

