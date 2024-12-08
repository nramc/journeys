import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, signal, viewChild} from '@angular/core';
import {BehaviorSubject, catchError, merge, of, startWith, switchMap} from "rxjs";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {DatePipe, NgForOf, NgIf, NgOptimizedImage, TitleCasePipe, UpperCasePipe} from "@angular/common";
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
import {SearchCriteria} from "../../model/core/search-criteria.model";
import {FormsModule} from "@angular/forms";
import {toObservable} from "@angular/core/rxjs-interop";
import {JourneyCardViewComponent} from "../../component/journey-card-view/journey-card-view.component";

export interface SearchResult {
  totalElements: number;
  data: Journey[];
}

export interface SortableHeader {
  label: string,
  key: string
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  standalone: true,
  imports: [
    PageHeaderComponent,
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
    MatIcon,
    FormsModule,
    JourneyCardViewComponent
  ],
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit, AfterViewInit {
// Sorting properties
  sortableFields: SortableHeader[] = [
    {label: 'Journey Date', key: 'journeyDate'},
    {label: 'Journey Name', key: 'name'},
    {label: "Geo Title", key: 'geoDetails.title'},
    {label: "City", key: 'geoDetails.city'},
    {label: "Country", key: 'geoDetails.country'},
    {label: "Category", key: 'geoDetails.category'},
    {label: "Geo Location", key: 'geoDetails.location'}
  ];
  sortingFieldChangedEvent: BehaviorSubject<SortableHeader> = new BehaviorSubject<SortableHeader>(
    {label: "Journey Date", key: 'journeyDate'});
  sortableDirections: SortDirection[] = ["asc", "desc"];
  sortingDirectionChangedEvent: BehaviorSubject<SortDirection> = new BehaviorSubject<SortDirection>("desc");
  defaultPageSize = 10;

  // search filter params
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  searchCriteria: SearchCriteria = new SearchCriteria();

  paginator = viewChild.required(MatPaginator);
  tags = signal<string[]>([]);
  tagsObservable = toObservable(this.tags);
  searchResult = signal<SearchResult>({totalElements: 0, data: []});

  constructor(
    private readonly journeyService: JourneyService,
    router: Router) {

    if (router.getCurrentNavigation()?.extras.state) {
      this.searchCriteria = router.getCurrentNavigation()?.extras.state as SearchCriteria;
    }

  }

  ngAfterViewInit(): void {
    merge(this.paginator().page, this.sortingFieldChangedEvent, this.sortingDirectionChangedEvent, this.tagsObservable)
      .pipe(
        startWith(),
        switchMap(() => {
          return this.journeyService.findJourneyByQuery(
            this.searchCriteria,
            this.sortingFieldChangedEvent.getValue().key,
            this.sortingDirectionChangedEvent.getValue(),
            this.paginator().pageIndex,
            this.paginator().pageSize,
            true,
            this.tags()
          ).pipe(catchError(() => of(null)));
        }),
      ).subscribe(data => this.onSuccess(data));
  }

  onSuccess(pageData: null | JourneyPage) {
    this.searchResult.set({
      totalElements: pageData?.totalElements ?? 0,
      data: pageData?.content ?? []
    });
  }

  ngOnInit(): void {
    this.journeyService.findJourneyByQuery(
      this.searchCriteria,
      'journeyDate',
      'desc',
      0,
      this.defaultPageSize,
      true
    ).subscribe(data => this.onSuccess(data));

  }

  addTag(event: MatChipInputEvent): void {
    const newTag = (event.value || '').trim();
    if (newTag) {
      this.tags.update(values => [...values, newTag]);
    }
    // Clear the input value
    event.chipInput.clear();
  }

  removeTag(tag: string): void {
    this.tags.update(values => values.filter(value => value !== tag));
  }
}
