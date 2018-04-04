import {ActionConstants} from "../ActionConstants";

export interface IShowModalDialogRemoveUnfilteredAction {
    type: string;
    showModalDialogRemoveUnfiltered: boolean;
}

export function ShowModalDialogRemoveUnfilteredAction(showModalDialogRemoveUnfiltered: boolean): IShowModalDialogRemoveUnfilteredAction {
    return {
        type: ActionConstants.SHOW_MODAL_DIALOG_REMOVE_UNFILTERED,
        showModalDialogRemoveUnfiltered: showModalDialogRemoveUnfiltered
    };
}