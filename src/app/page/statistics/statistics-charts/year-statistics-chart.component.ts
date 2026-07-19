import {
  ElementRef,
  ChangeDetectionStrategy,
  Component,
  input,
  viewChild,
} from '@angular/core';
import type { EChartsOption } from 'echarts';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { StatisticsKeyValue } from '../../../service/statistics/statistics.type';
import { initializeStatisticsChart } from './statistics-chart.base';

echarts.use([CanvasRenderer, GridComponent, LineChart, TooltipComponent]);

@Component({
  selector: 'app-year-statistics-chart',
  template: '<div #chart class="h-64 w-full" role="img" aria-label="Line chart showing journeys by year"></div>',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearStatisticsChartComponent {
  data = input.required<StatisticsKeyValue[]>();
  private readonly chartElement = viewChild.required<ElementRef<HTMLDivElement>>('chart');

  constructor() {
    initializeStatisticsChart(this.data, this.chartElement, () => this.buildOption());
  }

  private buildOption(): EChartsOption {
    const years = [...this.data()].sort((first, second) => Number(first.name) - Number(second.name));
    return {
      aria: { enabled: true },
      color: ['#3459E6'],
      grid: { left: 12, right: 16, top: 20, bottom: 24, containLabel: true },
      tooltip: {
        trigger: 'axis',
        valueFormatter: (value) => `${value} ${Number(value) === 1 ? 'journey' : 'journeys'}`,
      },
      xAxis: {
        type: 'category', boundaryGap: false, data: years.map((year) => year.name),
        axisLine: { lineStyle: { color: '#cbd5e1' } }, axisLabel: { color: '#64748b' },
      },
      yAxis: {
        type: 'value', name: 'Journeys', nameTextStyle: { color: '#64748b' },
        nameLocation: 'middle', nameGap: 36, minInterval: 1,
        splitLine: { lineStyle: { color: '#e2e8f0' } }, axisLabel: { color: '#64748b' },
      },
      series: [{
        type: 'line', smooth: true, symbolSize: 8,
        areaStyle: { color: 'rgba(52, 89, 230, 0.12)' }, emphasis: { focus: 'series' },
        data: years.map((year) => year.count),
      }],
    };
  }
}