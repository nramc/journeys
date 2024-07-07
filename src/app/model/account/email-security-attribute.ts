export class EmailSecurityAttribute {
  constructor(
    public type: string = 'EMAIL_ADDRESS',
    public value: string = '',
    public enabled: boolean = true,
    public verified: boolean = false,
    public creationDate?: string,
    public lastUpdateDate?: string) {
  }
}
