import {
  ElementRef,
  ChangeDetectionStrategy,
  Component,
  input,
  viewChild,
} from '@angular/core';
import type { EChartsOption } from 'echarts';
import { PieChart } from 'echarts/charts';
import { LegendComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { getIconConfigByCategory } from 'src/app/config/icon-config';
import { StatisticsKeyValue } from '../../../service/statistics/statistics.type';
import { initializeStatisticsChart } from './statistics-chart.base';

echarts.use([CanvasRenderer, LegendComponent, PieChart, TooltipComponent]);

@Component({
  selector: 'app-category-statistics-chart',
  template: '<div #chart class="h-72 w-full" role="img" aria-label="Donut chart showing journeys by category"></div>',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryStatisticsChartComponent {
  data = input.required<StatisticsKeyValue[]>();
  private readonly chartElement = viewChild.required<ElementRef<HTMLDivElement>>('chart');

  constructor() {
    initializeStatisticsChart(this.data, this.chartElement, () => this.buildOption());
  }

  private buildOption(): EChartsOption {
    const chartColors = ['#244b5a', '#d4775f', '#739b87', '#c49a5a', '#706782', '#4f8490', '#a66a78', '#7d8791'];
    const categories = this.data().map((category) => ({
      name: getIconConfigByCategory(category.name).label,
      value: category.count,
    }));
    const total = categories.reduce((sum, category) => sum + category.value, 0);
    return {
      aria: { enabled: true }, color: chartColors,
      tooltip: { trigger: 'item', formatter: '{b}: {c} journeys ({d}%)' },
      legend: {
        bottom: 0, type: 'scroll', textStyle: { color: '#64748b' },
        formatter: (name: string) => {
          const category = categories.find((item) => item.name === name);
          const percentage = category && total > 0 ? Math.round((category.value / total) * 100) : 0;
          return category ? `${name}  ${category.value} (${percentage}%)` : name;
        },
      },
      series: [{
        type: 'pie', radius: ['42%', '68%'], center: ['50%', '45%'], avoidLabelOverlap: true,
        itemStyle: { borderColor: '#ffffff', borderWidth: 2 }, label: { show: false },
        emphasis: { label: { show: true, fontSize: 14, fontWeight: 'bold' } }, data: categories,
      }],
    };
  }
}