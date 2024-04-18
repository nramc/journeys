import {UserContext} from "./user-context";

export default class AuthUtils {
  static readonly USER_CONTEXT_KEY: string = '_auth';

  static saveUserContextInLocalStorage(userContext: UserContext) {
    if (userContext) {
      localStorage.setItem(AuthUtils.USER_CONTEXT_KEY, JSON.stringify(userContext));
    }
  }

  static getUserContextFromLocalStorage() {
    let content = localStorage.getItem(AuthUtils.USER_CONTEXT_KEY);

    if (content) {
      let contentAsJson = JSON.parse(content);
      if (Date.now() < Date.parse(contentAsJson.expiredAt)) {
        let userContext = new UserContext(
          contentAsJson.userName,
          contentAsJson.isAuthenticated,
          contentAsJson.roles,
          contentAsJson.accessToken,
          new Date(Date.parse(contentAsJson.expiredAt))
        )
        console.log('Local auth context found and valid.', userContext);
        return userContext;
      } else {
        AuthUtils.removeUserContextFromLocalStorage();
        console.log('Local auth context found, but not valid. Thus removed from local storage.');
      }
    }

    return undefined;
  }

  static removeUserContextFromLocalStorage() {
    localStorage.removeItem(AuthUtils.USER_CONTEXT_KEY);
  }
}
