import {ActionConstants} from "../ActionConstants";

export interface IShowModalDialogRemoveFilteredAction {
    type: string;
    showModalDialogRemoveFiltered: boolean;
}

export function ShowModalDialogRemoveFilteredAction(showModalDialogRemoveFiltered: boolean): IShowModalDialogRemoveFilteredAction {
    return {
        type: ActionConstants.SHOW_MODAL_DIALOG_REMOVE_FILTERED,
        showModalDialogRemoveFiltered: showModalDialogRemoveFiltered
    };
}