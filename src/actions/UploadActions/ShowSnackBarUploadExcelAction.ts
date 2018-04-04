import {ActionConstants} from "../ActionConstants";

export interface IShowSnackBarUploadExcelAction {
    type: string;
    showSnackBarUploadExcel: boolean;
}

export function ShowSnackBarUploadExcelAction(showSnackBarUploadExcel: boolean): IShowSnackBarUploadExcelAction {
    return {
        type: ActionConstants.SHOW_SNACKBAR_UPLOAD_EXCEL_SUCCESS,
        showSnackBarUploadExcel: showSnackBarUploadExcel
    };
}
