export class AppUser {

  constructor(
    private _username: string,
    private _name: string,
    private _emailAddress: string,
    private _createdDate: string,
    private _lastLoggedIn: string,
    private _enabled: boolean,
    private _roles: string[]) {
  }

  set name(value: string) {
    this._name = value;
  }

  get username() {
    return this._username
  }

  get name(): string {
    return this._name;
  }

  get emailAddress(): string {
    return this._emailAddress;
  }

  get createdDate(): string {
    return this._createdDate;
  }

  get lastLoggedIn(): string {
    return this._lastLoggedIn;
  }

  get enabled(): boolean {
    return this._enabled;
  }

  get roles(): string[] {
    return this._roles;
  }

}
