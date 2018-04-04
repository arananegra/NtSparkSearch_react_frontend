import {ActionConstants} from "../ActionConstants";

export interface IShowSnackBarRegisterFailedAction {
    type: string;
    showSnackBarRegisterFailed: boolean;
}

export function ShowSnackBarRegisterFailedAction(showSnackBarRegisterFailed: boolean): IShowSnackBarRegisterFailedAction {
    return {
        type: ActionConstants.SHOW_SNACKBAR_REGISTER_FAILED,
        showSnackBarRegisterFailed: showSnackBarRegisterFailed
    };
}
