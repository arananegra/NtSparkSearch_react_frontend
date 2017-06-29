import {ActionConstants} from "../ActionConstants";
export interface IShowModalDialogUploadFastaAction {
    type: string;
    showModalDialog: boolean;
}

export function ShowModalDialogUploadFastaAction(showModalDialog: boolean): IShowModalDialogUploadFastaAction {
    return {
        type: ActionConstants.SHOW_MODAL_DIALOG_UPLOAD_FASTA,
        showModalDialog: showModalDialog
    };
}