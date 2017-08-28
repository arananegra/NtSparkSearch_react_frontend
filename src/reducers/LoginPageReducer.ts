import {Action} from "redux";
import {LoginPageDTO} from "../domain/LoginPage/LoginPageDTO";
import {ActionConstants} from "../actions/ActionConstants";
import objectAssign = require("object-assign");


export class LoginPageState {

    public _loginPage: LoginPageDTO;

    public constructor() {
        this._loginPage = new LoginPageDTO();
        this._loginPage._email = "";
        this._loginPage._password = "";
        this._loginPage._spinnerLoaded = true;
    }
}

export function LoginPageReducer(state: LoginPageState = new LoginPageState(),
                                    action: Action): LoginPageState {

    let newState: LoginPageState;

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
            newPageWithSpinnerState._spinnerLoaded = action["spinnerStateLoaded"];
            newState = objectAssign({}, state, {_loginPage: newPageWithSpinnerState});
            return newState;
    }
    return state;
}