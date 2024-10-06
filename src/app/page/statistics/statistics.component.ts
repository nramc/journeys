import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {STATISTICS_PAGE_INFO} from "../../model/page.info.model";
import {StatisticsService} from "../../service/statistics/statistics.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {Statistics} from "../../service/statistics/statistics.type";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {StatisticsPanelComponent} from "./statistics-panel/statistics-panel.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {tap} from "rxjs";

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [
    PageHeaderComponent,
    AsyncPipe,
    NgIf,
    MatProgressSpinner,
    StatisticsPanelComponent
  ],
  templateUrl: './statistics.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent {
  protected readonly STATISTICS_PAGE_INFO = STATISTICS_PAGE_INFO;
  isLoadingResults = signal<boolean>(true);

  private readonly statisticsService = inject(StatisticsService);

  statistics = toSignal<Statistics>(
    this.statisticsService.getStatistics().pipe(tap(_ => {
      this.isLoadingResults.set(false);
    }))
  );

}
