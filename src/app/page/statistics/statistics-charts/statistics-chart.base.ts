import {
  afterNextRender,
  DestroyRef,
  ElementRef,
  effect,
  inject,
  Signal,
} from '@angular/core';
import type { ECharts, EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';
import { StatisticsKeyValue } from '../../../service/statistics/statistics.type';

export function initializeStatisticsChart(
  data: Signal<StatisticsKeyValue[]>,
  chartElement: Signal<ElementRef<HTMLDivElement>>,
  buildOption: () => EChartsOption,
) {
  let chart: ECharts | undefined;
  let resizeObserver: ResizeObserver | undefined;

  const renderChart = () => chart?.setOption(buildOption());

  afterNextRender(() => {
    chart = echarts.init(chartElement().nativeElement);
    renderChart();
    resizeObserver = new ResizeObserver(() => chart?.resize());
    resizeObserver.observe(chartElement().nativeElement);
  });
  effect(() => {
    data();
    if (chart) {
      renderChart();
    }
  });
  inject(DestroyRef).onDestroy(() => {
    resizeObserver?.disconnect();
    chart?.dispose();
  });
}