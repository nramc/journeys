import {Role} from "./role";

export class UserContext {
  constructor(
    public name: string = '',
    public isAuthenticated: boolean = false,
    public roles: Role[] = [],
    public accessToken: string = '',
    public expiredAt: Date = new Date()
  ) {
  }


}
