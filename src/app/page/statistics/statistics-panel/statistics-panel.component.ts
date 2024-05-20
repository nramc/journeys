import {Component, Input, OnInit} from '@angular/core';
import {StatisticsKeyValue} from "../../../service/statistics/statistics.type";
import {JsonPipe, NgClass, NgForOf} from "@angular/common";
import {MatProgressBar} from "@angular/material/progress-bar";

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

  total: number = 0;

  comparatorFn(a: StatisticsKeyValue, b: StatisticsKeyValue) {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  };

  ngOnInit(): void {
    this.total = this.data
      .map(keyValue => keyValue.count)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  }

}
