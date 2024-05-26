export class SearchCriteria {
  constructor(
    public text: string = '',
    public city: string = '',
    public country: string = '',
    public category: string = '',
    public year: string = ''
  ) {
  }
}
