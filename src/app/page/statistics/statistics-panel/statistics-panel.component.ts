import {Component, Input, OnInit} from '@angular/core';
import {StatisticsKeyValue} from "../../../service/statistics/statistics.type";
import {JsonPipe, NgClass, NgForOf} from "@angular/common";
import {MatProgressBar} from "@angular/material/progress-bar";
import {Router} from "@angular/router";
import {SearchCriteria} from "../../../model/core/search-criteria.model";

type StatisticsType = 'category' | 'year' | 'city' | 'country';

@Component({
  selector: 'app-statistics-panel',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    MatProgressBar,
    NgClass
  ],
  templateUrl: './statistics-panel.component.html',
  styleUrl: './statistics-panel.component.scss'
})
export class StatisticsPanelComponent implements OnInit {
  @Input({required: true}) data: StatisticsKeyValue[] = [];
  @Input({required: true}) header: string = '';
  @Input({required: true}) type!: StatisticsType;

  total: number = 0;

  comparatorFn(a: StatisticsKeyValue, b: StatisticsKeyValue) {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  };

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.total = this.data
      .map(keyValue => keyValue.count)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  gotoGallery(statisticsType: StatisticsType, statisticsValue: string) {
    console.log(['/gallery', statisticsType, statisticsValue]);
    this.router.navigate(['/gallery'], {
        state: this.getSearchCriteria(statisticsType, statisticsValue)
      }
    )
      .then(console.log);
  }

  getSearchCriteria(statisticsType: StatisticsType, statisticsValue: string): SearchCriteria {
    let criteria = new SearchCriteria();
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
