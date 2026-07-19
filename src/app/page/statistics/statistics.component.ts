import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from "@angular/core/rxjs-interop";
import { PageHeaderComponent } from "../../component/page-header/page-header.component";
import { STATISTICS_PAGE_INFO } from "../../model/page.info.model";
import { StatisticsService } from "../../service/statistics/statistics.service";
import { Statistics, StatisticsKeyValue } from "../../service/statistics/statistics.type";
import { StatisticsChartsComponent } from "./statistics-charts/statistics-charts.component";
import { StatisticsPanelComponent } from "./statistics-panel/statistics-panel.component";
import { getIconConfigByCategory } from 'src/app/config/icon-config';

@Component({
  selector: 'app-statistics',
  imports: [
    PageHeaderComponent,
    StatisticsPanelComponent,
    StatisticsChartsComponent
  ],
  templateUrl: './statistics.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent {
  protected readonly STATISTICS_PAGE_INFO = STATISTICS_PAGE_INFO;

  private readonly statisticsService = inject(StatisticsService);

  statistics = toSignal<Statistics>(this.statisticsService.getStatistics());


  getJourneyCategoriesData(categories: StatisticsKeyValue[]): StatisticsKeyValue[] {
    return categories.map(category => ({
      name: getIconConfigByCategory(category.name).label,
      count: category.count
    }));
  }
}
