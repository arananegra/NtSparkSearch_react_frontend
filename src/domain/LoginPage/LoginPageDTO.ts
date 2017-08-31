export class LoginRegisterPageDTO {
    public _email: string;
    public _password: string;
    public _spinnerLoadedLogin: boolean;
    public _spinnerLoadedRegister: boolean;
    public _showSnackBarLoginFailed: boolean;
    public _showSnackBarRegisterFailed: boolean;
    public _showSnackBarLoginRequiredConfirmation: boolean;

    public constructor() {
        this._email = null;
        this._password = null;
        this._spinnerLoadedLogin = null;
        this._showSnackBarLoginFailed = null;
        this._showSnackBarRegisterFailed = null;
        this._spinnerLoadedRegister = null;
        this._showSnackBarLoginRequiredConfirmation = null;
    }
}