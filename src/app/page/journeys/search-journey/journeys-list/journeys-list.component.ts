import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, SortDirection} from "@angular/material/sort";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, map, merge, Observable, of, startWith, switchMap} from "rxjs";

@Component({
  selector: 'app-journeys-list',
  templateUrl: './journeys-list.component.html',
  styleUrl: './journeys-list.component.scss'
})
export class JourneysListComponent implements AfterViewInit {
  displayedColumns: string[] = ['created', 'state', 'number', 'title', 'action'];
  data: GithubIssue[] = [];
  resultsLength = 0;
  isLoadingResults = true;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input("criteria") criteria: Map<string, string> = new Map();

  constructor(private _httpClient: HttpClient) {
  }

  getRepoIssues(sort: string, order: SortDirection, page: number, pageSize: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';

    let params = new HttpParams();
    this.criteria.forEach((value, key) => params = params.set(key, value));
    params = params.set("sort", sort);
    params = params.set("order", order);
    params = params.set("page", page + 1);
    params = params.set("per_page", pageSize);
    console.log(params)

    return this._httpClient.get<GithubApi>(href, {params: params});
  }

  ngAfterViewInit() {

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;

          return this.getRepoIssues(
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
          this.resultsLength = data.total_count;
          return data.items;
        }),
      )
      .subscribe(data => (this.data = data));
  }

  viewJourney(row: any) {
    console.log(row);
    alert(row.number);
  }

  editJourney(row: any) {
    console.log(row);
    alert(row.number);
  }
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}
