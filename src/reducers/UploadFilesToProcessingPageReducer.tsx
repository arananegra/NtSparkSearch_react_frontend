import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";
import {UploadFilesToProcessingPageDTO} from "../domain/UploadPage/UploadFilesToProcessingPageDTO";

export class UploadPageState {
    public _uploadFilesToProcessingPage: UploadFilesToProcessingPageDTO;
    public textFromApi: string;

    public constructor() {
        this._uploadFilesToProcessingPage = new UploadFilesToProcessingPageDTO();
        this._uploadFilesToProcessingPage._showModalDialogUploadExcel = false;
        this._uploadFilesToProcessingPage._showSnackBarUploadExcelSucces = false;
        this._uploadFilesToProcessingPage._showSnackBarUploadFastaSucces = false;
        this.textFromApi = "NADA";
    }
}

export function UploadFilesToProcessingPageReducer(state: UploadPageState = new UploadPageState(),
                                                   action: Action): UploadPageState {

    let newState: UploadPageState;

    switch (action.type) {
        case ActionConstants.SHOW_MODAL_DIALOG_UPLOAD_EXCEL:
            let newModalValueToState: UploadFilesToProcessingPageDTO;

            newModalValueToState = objectAssign({}, state._uploadFilesToProcessingPage, {});

            newModalValueToState._showModalDialogUploadExcel = action["showModalDialog"];

            newState = objectAssign({}, state, {_uploadFilesToProcessingPage: newModalValueToState});

            return newState;

        case ActionConstants.LOAD_SIMPLE_SUCCES:

            let newTextToState: string;

            newTextToState = objectAssign({}, state.textFromApi, {});

            newTextToState = action["textFromApi"];

            newState = objectAssign({}, state, {textFromApi: newTextToState});
            return newState;

        case ActionConstants.SHOW_SNACKBAR_UPLOAD_EXCEL_SUCCESS:

            let newPageShowingUploadedExcelSnackbar = objectAssign({}, state._uploadFilesToProcessingPage, {});
            newPageShowingUploadedExcelSnackbar._showSnackBarUploadExcelSucces = action["showSnackBarUploadExcel"];
            newState = objectAssign({}, state, {_uploadFilesToProcessingPage: newPageShowingUploadedExcelSnackbar});

            return newState;


        default:
            return state;
    }
}