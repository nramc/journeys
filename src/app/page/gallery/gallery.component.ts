import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {GALLERY_PAGE_INFO} from "../../model/page-info";
import {catchError, map, merge, of, startWith, switchMap} from "rxjs";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {JourneyService} from "../../service/journey/journey.service";
import {HttpParams} from "@angular/common/http";
import {JourneyPage} from "../../service/journey/journey-page.type";
import {MatPaginator} from "@angular/material/paginator";
import {Journey} from "../../model/core/journey.model";

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
    MatPaginator
  ],
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  protected readonly GALLERY_PAGE_INFO = GALLERY_PAGE_INFO;
  isLoadingResults: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  defaultPageSize: number = 10;
  totalElements: number = 0;
  data: Journey[] = [];

  constructor(private journeyService: JourneyService) {
  }

  ngAfterViewInit(): void {
    merge(this.paginator.page)
      .pipe(
        startWith(),
        switchMap(() => {
          this.isLoadingResults = true;

          return this.journeyService.findJourneyByQuery(
            'queryString',
            'journeyDate',
            'desc',
            this.paginator.pageIndex,
            this.paginator.pageSize
          ).pipe(catchError(() => of(null)));
        }),
        map(data => {
          this.isLoadingResults = false;
          return data;
        }),
      ).subscribe(data => this.onSuccess(data));
  }

  onSuccess(pageData: null | JourneyPage) {
    this.totalElements = pageData?.totalElements || 0;
    this.data = pageData?.content || [];
  }

  ngOnInit(): void {
    let params = new HttpParams();
    this.journeyService.getAllJourneys(params).subscribe(data => this.onSuccess(data));
  }
}
