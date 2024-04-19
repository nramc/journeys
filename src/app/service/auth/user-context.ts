export class UserContext {
  constructor(
    public name: string = '',
    public isAuthenticated: boolean = false,
    public roles: string[] = [],
    public accessToken: string = '',
    public expiredAt: Date = new Date()
  ) {
  }


}
