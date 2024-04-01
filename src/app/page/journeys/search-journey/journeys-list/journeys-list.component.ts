import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, SortDirection} from "@angular/material/sort";
import {HttpParams} from "@angular/common/http";
import {BehaviorSubject, catchError, map, merge, Observable, of, startWith, switchMap} from "rxjs";
import {JourneyService} from "../../../../service/journey/journey.service";
import {JourneyPage} from "../../../../service/journey/journey-page.type";
import {Journey} from "../../../../model/core/journey.model";

@Component({
  selector: 'app-journeys-list',
  templateUrl: './journeys-list.component.html',
  styleUrl: './journeys-list.component.scss'
})
export class JourneysListComponent implements AfterViewInit {
  displayedColumns: string[] = ['createdDate', 'id', 'name', 'category', 'journeyDate', 'action'];
  data: Journey[] = [];
  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  searchQuerySubject = new BehaviorSubject<string>("");

  @Input("criteria") set criteria(value: string) {
    this.searchQuerySubject.next(value);
  }

  constructor(private journeyService: JourneyService) {
  }

  getRepoIssues(queryString: string, sort: string, order: SortDirection, page: number, pageSize: number): Observable<JourneyPage> {

    let params = new HttpParams();
    params = params.set("q", queryString);
    params = params.set("sort", sort);
    params = params.set("order", order.toUpperCase());
    params = params.set("page", page);
    params = params.set("per_page", pageSize);
    console.log(params)

    return this.journeyService.getAllJourneys(params);
  }

  ngAfterViewInit() {

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page, this.searchQuerySubject)
      .pipe(
        startWith(),
        switchMap(() => {
          this.isLoadingResults = true;

          return this.getRepoIssues(
            this.searchQuerySubject.getValue(),
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize
          ).pipe(catchError(() => of(null)));

        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          if (data === null) {
            return [];
          }
          this.resultsLength = data.totalElements;
          return data.content;
        }),
      )
      .subscribe(data => (this.data = data));
  }

  viewJourney(row: Journey) {
    console.log(row);
    alert(row.id);
  }

  editJourney(row: Journey) {
    console.log(row);
    alert(row.id);
  }

  trackJourney(index: number, item: Journey): string {
    return `${item.id}`;
  }
}
