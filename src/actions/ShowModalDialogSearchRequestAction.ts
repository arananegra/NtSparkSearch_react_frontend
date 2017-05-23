import {ActionConstants} from "./ActionConstants";

export interface IShowModalDialogSearchResquestAction {
    type: string;
    showModalDialog: boolean;
}

export function ShowModalDialogSearchRequestAction(showModalDialog: boolean): IShowModalDialogSearchResquestAction {
    return {
        type: ActionConstants.SHOW_MODAL_DIALOG_SEARCH_REQUEST,
        showModalDialog: showModalDialog
    };
}