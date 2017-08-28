import {ActionConstants} from "../ActionConstants";

export interface IShowSnackBarLoginFailedAction {
    type: string;
    showSnackBarLoginFailed: boolean;
}

export function ShowSnackBarLoginFailedAction(showSnackBarLoginFailed: boolean): IShowSnackBarLoginFailedAction {
    return {
        type: ActionConstants.SHOW_SNACKBAR_LOGIN_FAILED,
        showSnackBarLoginFailed: showSnackBarLoginFailed
    };
}
