import {Component, Input} from '@angular/core';
import {StatisticsKeyValue} from "../../../service/statistics/statistics.type";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-statistics-panel',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './statistics-panel.component.html',
  styleUrl: './statistics-panel.component.scss'
})
export class StatisticsPanelComponent {
  @Input({required: true}) data: StatisticsKeyValue[] = [];
  @Input({required: true}) header: string = '';
}
