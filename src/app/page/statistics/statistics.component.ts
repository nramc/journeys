import {Component, OnInit} from '@angular/core';
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {STATISTICS_PAGE_INFO} from "../../model/page.info.model";
import {StatisticsService} from "../../service/statistics/statistics.service";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {Statistics} from "../../service/statistics/statistics.type";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {StatisticsPanelComponent} from "./statistics-panel/statistics-panel.component";

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [
    PageHeaderComponent,
    AsyncPipe,
    JsonPipe,
    NgIf,
    MatProgressSpinner,
    StatisticsPanelComponent
  ],
  templateUrl: './statistics.component.html',
  styles: ''
})
export class StatisticsComponent implements OnInit {
  protected readonly STATISTICS_PAGE_INFO = STATISTICS_PAGE_INFO;
  statistics: Statistics | undefined = undefined;
  isLoadingResults: boolean = true;

  constructor(
    protected statisticsService: StatisticsService
  ) {
  }

  ngOnInit(): void {
    this.statisticsService.getStatistics()
      .subscribe({
        next: data => this.onSuccessCallback(data),
        error: err => console.error(err)
      });
  }

  onSuccessCallback(data: Statistics) {
    this.statistics = data;
    this.isLoadingResults = false;
  }

}
