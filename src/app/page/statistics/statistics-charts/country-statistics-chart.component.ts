import {
  ElementRef,
  ChangeDetectionStrategy,
  Component,
  input,
  viewChild,
} from '@angular/core';
import type { EChartsOption } from 'echarts';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { StatisticsKeyValue } from '../../../service/statistics/statistics.type';
import { initializeStatisticsChart } from './statistics-chart.base';

echarts.use([BarChart, CanvasRenderer, GridComponent, TooltipComponent]);

@Component({
  selector: 'app-country-statistics-chart',
  template: '<div #chart class="h-64 w-full" role="img" aria-label="Bar chart showing journeys by country"></div>',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryStatisticsChartComponent {
  data = input.required<StatisticsKeyValue[]>();
  private readonly chartElement = viewChild.required<ElementRef<HTMLDivElement>>('chart');

  constructor() {
    initializeStatisticsChart(this.data, this.chartElement, () => this.buildOption());
  }

  private buildOption(): EChartsOption {
    const countries = [...this.data()]
      .sort((first, second) => second.count - first.count || first.name.localeCompare(second.name))
      .slice(0, 8)
      .reverse();
    return {
      aria: { enabled: true }, color: ['#3459E6'],
      grid: { left: 12, right: 16, top: 8, bottom: 12, containLabel: true },
      tooltip: {
        trigger: 'axis', axisPointer: { type: 'shadow' },
        valueFormatter: (value) => `${value} ${Number(value) === 1 ? 'journey' : 'journeys'}`,
      },
      xAxis: {
        type: 'value', name: 'Journeys', nameTextStyle: { color: '#64748b' },
        nameLocation: 'middle', nameGap: 28, minInterval: 1,
        splitLine: { lineStyle: { color: '#e2e8f0' } }, axisLabel: { color: '#64748b' },
      },
      yAxis: {
        type: 'category', data: countries.map((country) => country.name),
        axisLabel: { color: '#64748b', width: 100, overflow: 'truncate' },
      },
      series: [{
        type: 'bar', barMaxWidth: 18,
        label: { show: true, position: 'right', color: '#475569', formatter: '{c}' },
        data: countries.map((country) => country.count),
        itemStyle: { borderRadius: [0, 5, 5, 0] }, emphasis: { focus: 'series' },
      }],
    };
  }
}