import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, signal, viewChild, inject } from '@angular/core';
import {BehaviorSubject, catchError, merge, of, shareReplay, startWith, switchMap} from "rxjs";
import {TitleCasePipe, UpperCasePipe} from "@angular/common";
import {JourneyService} from "../../service/journey/journey.service";
import {JourneyPage} from "../../service/journey/journey-page.type";
import {MatPaginator} from "@angular/material/paginator";
import {Journey} from "../../model/core/journey.model";
import {Router} from "@angular/router";
import {SortDirection} from "@angular/material/sort";
import {MatChipInputEvent, MatChipsModule} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {COMMA, ENTER, SPACE} from "@angular/cdk/keycodes";
import {SearchCriteria} from "../../model/core/search-criteria.model";
import {FormsModule} from "@angular/forms";
import {toObservable} from "@angular/core/rxjs-interop";
import {JourneyCardViewComponent} from "../../component/journey-card-view/journey-card-view.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButton} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {ScrollToTopComponent} from '../../component/scroll-to-top/scroll-to-top.component';
import {GALLERY_PAGE_INFO} from "../../model/page.info.model";

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
  imports: [
    MatPaginator,
    TitleCasePipe,
    UpperCasePipe,
    MatChipsModule,
    MatIcon,
    FormsModule,
    JourneyCardViewComponent,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatButton,
    MatMenuModule,
    PageHeaderComponent,
    ScrollToTopComponent
  ],
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit, AfterViewInit {
  private readonly journeyService = inject(JourneyService);

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
  defaultPageSize = 15;

  // search filter params
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  searchCriteria = signal(new SearchCriteria());

  paginator = viewChild.required(MatPaginator);
  tags = signal<string[]>([]);
  tagsObservable = toObservable(this.tags);
  searchResult = signal<SearchResult>({totalElements: 0, data: []});

  constructor() {
    const router = inject(Router);


    if (router.currentNavigation()?.extras.state) {
      this.searchCriteria.set(router.currentNavigation()?.extras.state as SearchCriteria);
    }

  }

  ngAfterViewInit(): void {
    this.search();
  }

  protected search() {
    merge(this.paginator().page, this.sortingFieldChangedEvent, this.sortingDirectionChangedEvent, this.tagsObservable)
      .pipe(
        startWith(),
        switchMap(() => {
          return this.journeyService.findJourneyByQuery(
            this.searchCriteria(),
            this.sortingFieldChangedEvent.getValue().key,
            this.sortingDirectionChangedEvent.getValue(),
            this.paginator().pageIndex,
            this.paginator().pageSize,
            true,
            this.tags()
          ).pipe(shareReplay(1), catchError(() => of(null)));
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
      this.searchCriteria(),
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

  protected readonly GALLERY_PAGE_INFO = GALLERY_PAGE_INFO;
}
