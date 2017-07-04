import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";
import {UploadFilesToProcessingPageDTO} from "../domain/UploadPage/UploadFilesToProcessingPageDTO";

export class UploadPageState {
    public _uploadFilesToProcessingPage: UploadFilesToProcessingPageDTO;

    public constructor() {
        this._uploadFilesToProcessingPage = new UploadFilesToProcessingPageDTO();
        this._uploadFilesToProcessingPage._showModalDialogUploadExcel = false;
        this._uploadFilesToProcessingPage._showModalDialogFasta = false;
        this._uploadFilesToProcessingPage._showSnackBarUploadExcelSucces = false;
        this._uploadFilesToProcessingPage._showSnackBarUploadFastaSucces = false;
        this._uploadFilesToProcessingPage._emailFromDialog = "";
    }
}

export function UploadFilesToProcessingPageReducer(state: UploadPageState = new UploadPageState(),
                                                   action: Action): UploadPageState {

    let newState: UploadPageState;

    switch (action.type) {
        case ActionConstants.SHOW_MODAL_DIALOG_UPLOAD_EXCEL:
            let newModalUploadExcelValueToState: UploadFilesToProcessingPageDTO;

            newModalUploadExcelValueToState = objectAssign({}, state._uploadFilesToProcessingPage, {});

            newModalUploadExcelValueToState._showModalDialogUploadExcel = action["showModalDialog"];

            newState = objectAssign({}, state, {_uploadFilesToProcessingPage: newModalUploadExcelValueToState});

            return newState;

        case ActionConstants.SHOW_MODAL_DIALOG_UPLOAD_FASTA:
            let newModalUploadFastaValueToState: UploadFilesToProcessingPageDTO;

            newModalUploadFastaValueToState = objectAssign({}, state._uploadFilesToProcessingPage, {});

            newModalUploadFastaValueToState._showModalDialogFasta = action["showModalDialog"];

            newState = objectAssign({}, state, {_uploadFilesToProcessingPage: newModalUploadFastaValueToState});

            return newState;

        case ActionConstants.SHOW_SNACKBAR_UPLOAD_EXCEL_SUCCESS:

            let newPageShowingUploadedExcelSnackbar = objectAssign({}, state._uploadFilesToProcessingPage, {});
            newPageShowingUploadedExcelSnackbar._showSnackBarUploadExcelSucces = action["showSnackBarUploadExcel"];
            newState = objectAssign({}, state, {_uploadFilesToProcessingPage: newPageShowingUploadedExcelSnackbar});
            return newState;

        case ActionConstants.SHOW_SNACKBAR_UPLOAD_FASTA_SUCCESS:

            let newPageShowingUploadedFastaSnackbar = objectAssign({}, state._uploadFilesToProcessingPage, {});
            newPageShowingUploadedFastaSnackbar._showSnackBarUploadFastaSucces = action["showSnackBarUploadFasta"];
            newState = objectAssign({}, state, {_uploadFilesToProcessingPage: newPageShowingUploadedFastaSnackbar});
            return newState;

        case ActionConstants.WRITE_EMAIL_UPLOAD_INPUT_TEXT:
            let newPageWithEmailFromDialog = objectAssign({}, state._uploadFilesToProcessingPage, {});
            newPageWithEmailFromDialog._emailFromDialog = action["textFromInputTextBox"];
            newState = objectAssign({}, state, {_uploadFilesToProcessingPage: newPageWithEmailFromDialog});
            return newState;

        default:
            return state;
    }
}