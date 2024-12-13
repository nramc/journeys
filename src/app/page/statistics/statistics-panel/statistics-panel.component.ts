import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {StatisticsKeyValue} from "../../../service/statistics/statistics.type";
import {MatProgressBar} from "@angular/material/progress-bar";
import {Router} from "@angular/router";
import {SearchCriteria} from "../../../model/core/search-criteria.model";
import {MatCardModule} from "@angular/material/card";
import {MatRippleModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTooltip} from "@angular/material/tooltip";

type StatisticsType = 'category' | 'year' | 'city' | 'country';

@Component({
  selector: 'app-statistics-panel',
  standalone: true,
  imports: [
    MatProgressBar,
    MatCardModule,
    MatRippleModule,
    MatIconModule,
    MatIconButton,
    MatExpansionModule,
    MatTooltip
  ],
  templateUrl: './statistics-panel.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsPanelComponent {
  private readonly router = inject(Router);

  expand = input(false);
  data = input.required<StatisticsKeyValue[]>();
  header = input.required<string>();
  type = input.required<StatisticsType>();
  totalCount = computed(() => this.data()
    .map(keyValue => keyValue.count)
    .reduce((previousValue, currentValue) => previousValue + currentValue));

  comparatorFn(a: StatisticsKeyValue, b: StatisticsKeyValue) {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  };

  gotoGallery(statisticsType: StatisticsType, statisticsValue: string) {
    this.router.navigate(['/gallery'], {
        state: this.getSearchCriteria(statisticsType, statisticsValue)
      }
    )
      .then(console.log);
  }

  gotoTimeline(statisticsType: StatisticsType, statisticsValue: string, $event: MouseEvent) {
    $event.stopPropagation();
    this.router.navigate(['/timeline'], {
      queryParams: {
        [statisticsType]: statisticsValue
      }
    }).then(console.log);
    return false;
  }

  getSearchCriteria(statisticsType: StatisticsType, statisticsValue: string): SearchCriteria {
    const criteria = new SearchCriteria();
    switch (statisticsType) {
      case "category":
        criteria.category = statisticsValue;
        break;
      case "city":
        criteria.city = statisticsValue;
        break
      case "country":
        criteria.country = statisticsValue
        break;
      case "year":
        criteria.year = statisticsValue;
        break
    }

    return criteria;
  }

  getPercentage(count: number, total: number) {
    return Math.round((count / total) * 100);
  }
}
