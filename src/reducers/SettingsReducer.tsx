import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";
import {GeneSubSequenceSearcherDTO} from "../domain/GeneSubSequenceSearcherDTO";
import {GeneSearchPageDTO} from "../domain/SearchPages/GeneSearchPageDTO";
import {GeneSubsequenceResultDTO} from "../domain/GeneSubsequenceResultDTO";
import {TableHeaderColumnDTO} from "../domain/TableHeaderColumnDTO";
import {MessagesConstants} from "../i18n/MessagesConstants";
import {GeneDTO} from "../domain/GeneDTO";
import {SettingsPageDTO} from "../domain/SettingsPage/SettingsPageDTO";

export class SettingsPageState {
    public _settingsPage: SettingsPageDTO;

    public constructor() {
        this._settingsPage = new SettingsPageDTO();
        this._settingsPage._showModalDialogRemoveUnfiltered = false;
        this._settingsPage._showModalDialogRemoveFiltered = false;
        this._settingsPage._showSnackbarRemoveUnfiltered = false;
        this._settingsPage._showSnackbarRemoveFiltered = false;
    }
}

export function SettingsPageReducer(state: SettingsPageState = new SettingsPageState(),
                                    action: Action): SettingsPageState {

    let newState: SettingsPageState;

    switch (action.type) {

        case ActionConstants.SHOW_MODAL_DIALOG_REMOVE_UNFILTERED:

            let newPageUnfiltered = objectAssign({}, state._settingsPage, {});
            newPageUnfiltered._showModalDialogRemoveUnfiltered = action["showModalDialogRemoveUnfiltered"];
            newState = objectAssign({}, state, {_settingsPage: newPageUnfiltered});

            return newState;

        case ActionConstants.SHOW_MODAL_DIALOG_REMOVE_FILTERED:

            let newPageFiltered = objectAssign({}, state._settingsPage, {});
            newPageFiltered._showModalDialogRemoveFiltered = action["showModalDialogRemoveFiltered"];
            newState = objectAssign({}, state, {_settingsPage: newPageFiltered});

            return newState;

        case ActionConstants.SHOW_SNACKBAR_REMOVE_UNFILTERED:

            let newPageShowingUnfilteredSnackbar = objectAssign({}, state._settingsPage, {});
            newPageShowingUnfilteredSnackbar._showSnackbarRemoveUnfiltered = action["showSnackBarRemoveUnfiltered"];
            newState = objectAssign({}, state, {_settingsPage: newPageShowingUnfilteredSnackbar});

            return newState;

        case ActionConstants.SHOW_SNACKBAR_REMOVE_FILTERED:

            let newPageShowingFilteredSnackbar = objectAssign({}, state._settingsPage, {});
            newPageShowingFilteredSnackbar._showSnackbarRemoveFiltered = action["showSnackBarRemoveFiltered"];
            newState = objectAssign({}, state, {_settingsPage: newPageShowingFilteredSnackbar});

            return newState;
        default:
            return state;
    }
}