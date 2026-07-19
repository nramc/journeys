import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Statistics } from '../../../service/statistics/statistics.type';
import { CategoryStatisticsChartComponent } from './category-statistics-chart.component';
import { CountryStatisticsChartComponent } from './country-statistics-chart.component';
import { YearStatisticsChartComponent } from './year-statistics-chart.component';

@Component({
  selector: 'app-statistics-charts',
  imports: [
    CategoryStatisticsChartComponent,
    CountryStatisticsChartComponent,
    YearStatisticsChartComponent,
  ],
  template: `
    <section
      class="flex flex-col gap-4"
      aria-label="Journey statistics charts"
    >
      <article
        class="min-w-0 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900/50 sm:p-5"
      >
        <div class="mb-2">
          <h2
            class="m-0 text-base font-semibold text-slate-800 dark:text-slate-100"
          >
            Journey rhythm
          </h2>
          <p class="m-0 mt-1 text-xs text-slate-500 dark:text-slate-400">
            How your memories are distributed across the years.
          </p>
        </div>
        <app-year-statistics-chart [data]="data().years"></app-year-statistics-chart>
      </article>

      <article
        class="min-w-0 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900/50 sm:p-5"
      >
        <div class="mb-2">
          <h2
            class="m-0 text-base font-semibold text-slate-800 dark:text-slate-100"
          >
            Countries explored
          </h2>
          <p class="m-0 mt-1 text-xs text-slate-500 dark:text-slate-400">
            The countries that appear most often in your journeys.
          </p>
        </div>
        <app-country-statistics-chart [data]="data().countries"></app-country-statistics-chart>
      </article>

      <article
        class="min-w-0 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900/50 sm:p-5"
      >
        <div class="mb-2">
          <h2
            class="m-0 text-base font-semibold text-slate-800 dark:text-slate-100"
          >
            How you wander
          </h2>
          <p class="m-0 mt-1 text-xs text-slate-500 dark:text-slate-400">
            A view of the categories that shape your memories.
          </p>
        </div>
        <app-category-statistics-chart [data]="data().categories"></app-category-statistics-chart>
      </article>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsChartsComponent {
  data = input.required<Statistics>();
}
