import {AfterViewInit, Component, OnInit, signal, viewChild} from '@angular/core';
import {BehaviorSubject, catchError, merge, of, startWith, switchMap, tap} from "rxjs";
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
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {toObservable} from "@angular/core/rxjs-interop";

export interface SearchResult {
  totalElements: number;
  data: Journey[];
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
    MatProgressSpinner
  ],
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {
// Sorting properties
  sortableFields: string[] = ["journeyDate", "name", "title", "city", "country", "category", "location"];
  sortingFieldChangedEvent: BehaviorSubject<string> = new BehaviorSubject<string>("journeyDate");
  sortableDirections: SortDirection[] = ["asc", "desc"];
  sortingDirectionChangedEvent: BehaviorSubject<SortDirection> = new BehaviorSubject<SortDirection>("desc");
  isLoadingResults: boolean = false;
  defaultPageSize: number = 10;

  // search filter params
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  searchCriteria: SearchCriteria = new SearchCriteria();

  paginator = viewChild.required(MatPaginator);
  tags = signal<string[]>([]);
  tagsObservable = toObservable(this.tags);
  searchResult = signal<SearchResult>({totalElements: 0, data: []});

  constructor(
    private journeyService: JourneyService,
    private router: Router) {

    if (router.getCurrentNavigation()?.extras.state) {
      this.searchCriteria = router.getCurrentNavigation()?.extras.state as SearchCriteria;
    }

  }

  ngAfterViewInit(): void {
    merge(this.paginator().page, this.sortingFieldChangedEvent, this.sortingDirectionChangedEvent, this.tagsObservable)
      .pipe(
        startWith(),
        tap(() => this.isLoadingResults = true),
        switchMap(() => {
          return this.journeyService.findJourneyByQuery(
            this.searchCriteria,
            this.sortingFieldChangedEvent.getValue(),
            this.sortingDirectionChangedEvent.getValue(),
            this.paginator().pageIndex,
            this.paginator().pageSize,
            true,
            this.tags()
          ).pipe(catchError(() => of(null)));
        }),
        tap(data => this.isLoadingResults = false)
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

  viewDetails(journey: Journey) {
    this.router.navigate(['/journey', journey.id, 'view']).then(console.log);
  }

  editDetails(journey: Journey, $event: MouseEvent) {
    $event.stopPropagation();
    this.router.navigate(['/journey', journey.id, 'edit']).then(console.log);
    return false;
  }

  viewInTimeline(journey: Journey, $event: MouseEvent) {
    $event.stopPropagation();
    this.router.navigate(['/timeline'], {
      queryParams: {
        'id': journey.id
      }
    }).then(console.log);
    return false;
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
