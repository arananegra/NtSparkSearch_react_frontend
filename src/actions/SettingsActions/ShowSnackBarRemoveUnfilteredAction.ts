import {ActionConstants} from "../ActionConstants";

export interface IShowSnackBarRemoveUnfilteredAction {
    type: string;
    showSnackBarRemoveUnfiltered: boolean;
}

export function ShowSnackBarRemoveUnfilteredAction(showSnackBarRemoveUnfiltered: boolean): IShowSnackBarRemoveUnfilteredAction {
    return {
        type: ActionConstants.SHOW_SNACKBAR_REMOVE_UNFILTERED,
        showSnackBarRemoveUnfiltered: showSnackBarRemoveUnfiltered
    };
}