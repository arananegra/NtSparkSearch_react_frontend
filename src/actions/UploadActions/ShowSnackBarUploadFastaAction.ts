import {ActionConstants} from "../ActionConstants";

export interface IShowSnackBarUploadFastaAction {
    type: string;
    showSnackBarUploadFasta: boolean;
}

export function ShowSnackBarUploadFastaAction(showSnackBarUploadFasta: boolean): IShowSnackBarUploadFastaAction {
    return {
        type: ActionConstants.SHOW_SNACKBAR_UPLOAD_FASTA_SUCCESS,
        showSnackBarUploadFasta: showSnackBarUploadFasta
    };
}
