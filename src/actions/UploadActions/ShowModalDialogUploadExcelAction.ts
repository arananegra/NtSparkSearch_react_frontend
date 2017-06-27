import {ActionConstants} from "../ActionConstants";
export interface IShowModalDialogUploadExcelAction {
    type: string;
    showModalDialog: boolean;
}

export function ShowModalDialogUploadExcelAction(showModalDialog: boolean): IShowModalDialogUploadExcelAction {
    return {
        type: ActionConstants.SHOW_MODAL_DIALOG_UPLOAD_EXCEL,
        showModalDialog: showModalDialog
    };
}