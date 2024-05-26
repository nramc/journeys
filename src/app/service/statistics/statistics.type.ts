export interface Statistics {
  categories: StatisticsKeyValue[],
  cities: StatisticsKeyValue[],
  countries: StatisticsKeyValue[],
  years: StatisticsKeyValue[]
}

export interface StatisticsKeyValue {
  name: string,
  count: number
}
