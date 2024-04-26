import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {GALLERY_PAGE_INFO} from "../../model/page-info";
import {BehaviorSubject, catchError, map, merge, of, startWith, switchMap} from "rxjs";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {
  AsyncPipe,
  DatePipe,
  JsonPipe,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  TitleCasePipe,
  UpperCasePipe
} from "@angular/common";
import {JourneyService} from "../../service/journey/journey.service";
import {JourneyPage} from "../../service/journey/journey-page.type";
import {MatPaginator} from "@angular/material/paginator";
import {Journey} from "../../model/core/journey.model";
import {Router} from "@angular/router";
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";
import {SortDirection} from "@angular/material/sort";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  standalone: true,
  imports: [
    PageHeaderComponent,
    AsyncPipe,
    JsonPipe,
    NgForOf,
    NgIf,
    MatPaginator,
    NgOptimizedImage,
    DatePipe,
    NgbDropdown,
    NgbDropdownItem,
    NgbDropdownMenu,
    TitleCasePipe,
    NgbDropdownToggle,
    UpperCasePipe
  ],
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  protected readonly GALLERY_PAGE_INFO = GALLERY_PAGE_INFO;
  // Sorting properties
  sortableFields: string[] = ["journeyDate", "name", "title", "city", "country", "category", "location"];
  sortingFieldChangedEvent: BehaviorSubject<string> = new BehaviorSubject<string>("journeyDate");
  SortedField: string = 'journeyDate';
  sortableDirections: SortDirection[] = ["asc", "desc"];
  sortingDirectionChangedEvent: BehaviorSubject<SortDirection> = new BehaviorSubject<SortDirection>("desc");
  isLoadingResults: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  defaultPageSize: number = 10;
  totalElements: number = 0;
  data: Journey[] = [];

  constructor(
    private journeyService: JourneyService,
    private router: Router) {
  }

  ngAfterViewInit(): void {
    merge(this.paginator.page, this.sortingFieldChangedEvent, this.sortingDirectionChangedEvent)
      .pipe(
        startWith(),
        switchMap(() => {
          this.isLoadingResults = true;

          return this.journeyService.findJourneyByQuery(
            '',
            this.sortingFieldChangedEvent.getValue(),
            this.sortingDirectionChangedEvent.getValue(),
            this.paginator.pageIndex,
            this.paginator.pageSize,
            true
          ).pipe(catchError(() => of(null)));
        }),
        map(data => {
          this.isLoadingResults = false;
          return data;
        }),
      ).subscribe(data => this.onSuccess(data));
  }

  onSuccess(pageData: null | JourneyPage) {
    this.totalElements = pageData?.totalElements ?? 0;
    this.data = pageData?.content ?? [];
  }

  ngOnInit(): void {
    this.journeyService.findJourneyByQuery(
      '',
      'journeyDate',
      'desc',
      0,
      this.defaultPageSize,
      true
    ).subscribe(data => this.onSuccess(data));
  }

  viewDetails(journey: Journey) {
    this.router.navigate(['/journey', journey.id, 'view']).then();
  }

  editDetails(journey: Journey) {
    this.router.navigate(['/journey', journey.id, 'edit']).then();
  }
}
