export class LoginPageDTO {
    public _email: string;
    public _password: string;
    public _spinnerLoaded: boolean;
    public _showSnackBarLoginFailed :boolean;

    public constructor() {
        this._email = null;
        this._password = null;
        this._spinnerLoaded = null;
    }
}