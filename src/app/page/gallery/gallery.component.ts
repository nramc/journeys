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
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {SortDirection} from "@angular/material/sort";
import {HasWriteAccessDirective} from "../../directive/has-write-access.directive";
import {MatChipInputEvent, MatChipsModule} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {COMMA, ENTER, SPACE} from "@angular/cdk/keycodes";

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
    NgbDropdownModule,
    TitleCasePipe,
    UpperCasePipe,
    HasWriteAccessDirective,
    MatChipsModule,
    MatIcon
  ],
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  protected readonly GALLERY_PAGE_INFO = GALLERY_PAGE_INFO;
  // Sorting properties
  sortableFields: string[] = ["journeyDate", "name", "title", "city", "country", "category", "location"];
  sortingFieldChangedEvent: BehaviorSubject<string> = new BehaviorSubject<string>("journeyDate");
  sortableDirections: SortDirection[] = ["asc", "desc"];
  sortingDirectionChangedEvent: BehaviorSubject<SortDirection> = new BehaviorSubject<SortDirection>("desc");
  isLoadingResults: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  defaultPageSize: number = 10;
  totalElements: number = 0;
  data: Journey[] = [];
  trackJourneyByFn = (index: number, journey: Journey) => journey.id;
  trackTagByFn = (index: number, tag: string) => tag;

  // search filter params
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  tags: string[] = []
  tagsCriteriaChange = new BehaviorSubject<string[]>([]);

  constructor(
    private journeyService: JourneyService,
    private router: Router) {
  }

  ngAfterViewInit(): void {
    merge(this.paginator.page, this.sortingFieldChangedEvent, this.sortingDirectionChangedEvent, this.tagsCriteriaChange)
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
            true,
            this.tags
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

  addTag(event: MatChipInputEvent): void {
    const newTag = (event.value || '').trim();
    if (newTag) {
      this.tags.push(newTag);
      this.tagsCriteriaChange.next(this.tags);
    }
    // Clear the input value
    event.chipInput.clear();
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
      this.tagsCriteriaChange.next(this.tags);
    }
  }
}
