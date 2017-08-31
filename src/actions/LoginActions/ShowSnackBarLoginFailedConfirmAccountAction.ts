import {ActionConstants} from "../ActionConstants";

export interface IShowSnackBarLoginFailedConfirmAccountAction {
    type: string;
    showSnackBarLoginFailedConfirmAccount: boolean;
}

export function ShowSnackBarLoginFailedConfirmAccountAction(showSnackBarLoginFailedConfirmAccount: boolean): IShowSnackBarLoginFailedConfirmAccountAction {
    return {
        type: ActionConstants.SHOW_SNACKBAR_LOGIN_FAILED_CONFIRM_ACCOUNT,
        showSnackBarLoginFailedConfirmAccount: showSnackBarLoginFailedConfirmAccount
    };
}
