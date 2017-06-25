import {ActionConstants} from "../ActionConstants";

export interface IShowSnackBarRemoveFilteredAction {
    type: string;
    showSnackBarRemoveFiltered: boolean;
}

export function ShowSnackBarRemoveFilteredAction(showSnackBarRemoveFiltered: boolean): IShowSnackBarRemoveFilteredAction {
    return {
        type: ActionConstants.SHOW_SNACKBAR_REMOVE_FILTERED,
        showSnackBarRemoveFiltered: showSnackBarRemoveFiltered
    };
}
