import {Role} from "./role";

export class UserContext {
  constructor(
    public name = '',
    public isAuthenticated = false,
    public roles: Role[] = [],
    public accessToken = '',
    public expiredAt: Date = new Date()
  ) {
  }


}
