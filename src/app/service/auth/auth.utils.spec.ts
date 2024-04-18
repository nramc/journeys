import AuthUtils from "./auth.utils";

describe('AuthUtils tests', () => {

  it('getUserContextFromLocalStorage', () => {
    expect(AuthUtils.getUserContextFromLocalStorage()).toBeUndefined();
  });

});
