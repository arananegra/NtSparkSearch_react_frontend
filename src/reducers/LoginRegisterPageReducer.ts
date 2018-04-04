import {Action} from "redux";
import {LoginRegisterPageDTO} from "../domain/LoginPage/LoginPageDTO";
import {ActionConstants} from "../actions/ActionConstants";
import objectAssign = require("object-assign");


export class LoginRegisterPageState {

    public _loginPage: LoginRegisterPageDTO;

    public constructor() {
        this._loginPage = new LoginRegisterPageDTO();
        this._loginPage._email = "";
        this._loginPage._password = "";
        this._loginPage._spinnerLoadedLogin = true;
        this._loginPage._showSnackBarLoginFailed = false;
        this._loginPage._spinnerLoadedRegister = true;
        this._loginPage._showSnackBarLoginRequiredConfirmation = false;
        this._loginPage._showSnackBarRegisterFailed = false;
    }
}

export function LoginRegisterPageReducer(state: LoginRegisterPageState = new LoginRegisterPageState(),
                                 action: Action): LoginRegisterPageState {

    let newState: LoginRegisterPageState;

    switch (action.type) {
        case ActionConstants.WRITE_LOGIN_EMAIL:
            let newPageWithEmail = objectAssign({}, state._loginPage, {});
            newPageWithEmail._email = action["email"];
            newState = objectAssign({}, state, {_loginPage: newPageWithEmail});
            return newState;

        case ActionConstants.WRITE_LOGIN_PASSWORD:
            let newPageWithPassword = objectAssign({}, state._loginPage, {});
            newPageWithPassword._password = action["password"];
            newState = objectAssign({}, state, {_loginPage: newPageWithPassword});
            return newState;

        case ActionConstants.SPINNER_LOGIN_STATE_CHANGE:
            let newPageWithSpinnerState = objectAssign({}, state._loginPage, {});
            newPageWithSpinnerState._spinnerLoadedLogin = action["spinnerStateLoaded"];
            newState = objectAssign({}, state, {_loginPage: newPageWithSpinnerState});
            return newState;

        case ActionConstants.SHOW_SNACKBAR_LOGIN_FAILED:

            let newPageShowingLoginFailedSnackbar = objectAssign({}, state._loginPage, {});
            newPageShowingLoginFailedSnackbar._showSnackBarLoginFailed = action["showSnackBarLoginFailed"];
            newState = objectAssign({}, state, {_loginPage: newPageShowingLoginFailedSnackbar});
            return newState;

        case ActionConstants.SHOW_SNACKBAR_REGISTER_FAILED:
            let newPageShowingRegisterFailedSnackbar = objectAssign({}, state._loginPage, {});
            newPageShowingRegisterFailedSnackbar._showSnackBarRegisterFailed = action["showSnackBarRegisterFailed"];
            newState = objectAssign({}, state, {_loginPage: newPageShowingRegisterFailedSnackbar});
            return newState;

        case ActionConstants.SHOW_SNACKBAR_LOGIN_FAILED_CONFIRM_ACCOUNT:
            let newPageShowingConfirmAccountSnackbar = objectAssign({}, state._loginPage, {});
            newPageShowingConfirmAccountSnackbar._showSnackBarLoginRequiredConfirmation = action["showSnackBarLoginFailedConfirmAccount"];
            newState = objectAssign({}, state, {_loginPage: newPageShowingConfirmAccountSnackbar});
            return newState;

        case ActionConstants.SPINNER_REGISTER_STATE_CHANGE:
            let newPageWithSpinnerRegisterState = objectAssign({}, state._loginPage, {});
            newPageWithSpinnerRegisterState._spinnerLoadedRegister = action["spinnerStateRegisterLoaded"];
            newState = objectAssign({}, state, {_loginPage: newPageWithSpinnerRegisterState});
            return newState;
    }
    return state;
}