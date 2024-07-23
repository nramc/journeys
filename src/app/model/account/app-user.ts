export class AppUser {

  constructor(
    private _username: string,
    private _name: string,
    private _createdDate: string,
    private _passwordChangedAt: string,
    private _enabled: boolean,
    private _roles: string[],
    private _mfaEnabled: boolean) {
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

  get createdDate(): string {
    return this._createdDate;
  }

  get passwordChangedAt(): string {
    return this._passwordChangedAt;
  }

  get enabled(): boolean {
    return this._enabled;
  }

  get roles(): string[] {
    return this._roles;
  }

  set mfaEnabled(status: boolean) {
    this._mfaEnabled = status;
  }

  get mfaEnabled() {
    return this._mfaEnabled;
  }


}
