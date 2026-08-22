import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  signal,
  viewChild
} from '@angular/core';
import {BehaviorSubject, finalize, Subscription} from "rxjs";
import {TitleCasePipe, UpperCasePipe} from "@angular/common";
import {JourneyService} from "../../service/journey/journey.service";
import {Journey} from "../../model/core/journey.model";
import {Router} from "@angular/router";
import {SortDirection} from "@angular/material/sort";
import {MatChipInputEvent, MatChipsModule} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {COMMA, ENTER, SPACE} from "@angular/cdk/keycodes";
import {SearchCriteria} from "../../model/core/search-criteria.model";
import {FormsModule} from "@angular/forms";
import {
  JourneyCardViewComponent
} from "../../component/journey-card-view/journey-card-view.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButton} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
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
    PageHeaderComponent
  ],
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements AfterViewInit, OnDestroy {
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
  readonly defaultPageSize = 15;

  // search filter params
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  searchCriteria = signal(new SearchCriteria());

  loadMoreSentinel = viewChild.required<ElementRef<HTMLDivElement>>('loadMoreSentinel');
  tags = signal<string[]>([]);
  searchResult = signal<SearchResult>({totalElements: 0, data: []});
  loading = signal(false);
  hasMore = signal(true);

  private nextPage = 0;
  private requestSubscription?: Subscription;
  private intersectionObserver?: IntersectionObserver;
  private requestGeneration = 0;

  constructor() {
    const router = inject(Router);

    if (router.currentNavigation()?.extras.state) {
      this.searchCriteria.set(router.currentNavigation()?.extras.state as SearchCriteria);
    }

  }

  ngAfterViewInit(): void {
    this.intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        this.loadNextPage();
      }
    }, {rootMargin: '240px 0px'});
    this.intersectionObserver.observe(this.loadMoreSentinel().nativeElement);

    this.search();
  }

  protected search(): void {
    this.requestGeneration++;
    this.requestSubscription?.unsubscribe();
    this.nextPage = 0;
    this.hasMore.set(true);
    this.searchResult.set({totalElements: 0, data: []});
    this.loadPage(0, this.requestGeneration);
  }

  protected changeSortingField(sortHeader: SortableHeader): void {
    this.sortingFieldChangedEvent.next(sortHeader);
    this.search();
  }

  protected changeSortingDirection(direction: SortDirection): void {
    this.sortingDirectionChangedEvent.next(direction);
    this.search();
  }

  private loadNextPage(): void {
    if (this.loading() || !this.hasMore()) {
      return;
    }

    this.nextPage++;
    this.loadPage(this.nextPage, this.requestGeneration);
  }

  private loadPage(page: number, generation: number): void {
    if (this.loading() || generation !== this.requestGeneration) {
      return;
    }

    this.loading.set(true);
    this.requestSubscription = this.journeyService.findJourneyByQuery(
      this.searchCriteria(),
      this.sortingFieldChangedEvent.getValue().key,
      this.sortingDirectionChangedEvent.getValue(),
      page,
      this.defaultPageSize,
      true,
      this.tags()
    ).pipe(
      finalize(() => {
        if (generation === this.requestGeneration) {
          this.loading.set(false);
        }
      })
    ).subscribe({
      next: pageData => {
        if (generation !== this.requestGeneration) {
          return;
        }

        const currentData = page === 0 ? [] : this.searchResult().data;
        const data = [...currentData, ...pageData.content];
        this.searchResult.set({totalElements: pageData.totalElements, data});
        this.hasMore.set(
          pageData.content.length > 0
          && page + 1 < pageData.totalPages
          && data.length < pageData.totalElements
        );
      },
      error: () => {
        if (generation === this.requestGeneration) {
          this.hasMore.set(false);
        }
      }
    });

  }

  addTag(event: MatChipInputEvent): void {
    const newTag = (event.value || '').trim();
    if (newTag) {
      this.tags.update(values => [...values, newTag]);
      this.search();
    }
    // Clear the input value
    event.chipInput.clear();
  }

  removeTag(tag: string): void {
    this.tags.update(values => values.filter(value => value !== tag));
    this.search();
  }

  ngOnDestroy(): void {
    this.requestSubscription?.unsubscribe();
    this.intersectionObserver?.disconnect();
  }

  protected readonly GALLERY_PAGE_INFO = GALLERY_PAGE_INFO;
}
