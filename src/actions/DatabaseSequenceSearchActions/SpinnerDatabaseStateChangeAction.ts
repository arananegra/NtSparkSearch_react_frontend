import {ActionConstants} from "../ActionConstants";

export interface ISpinnerStateChangeAction {
    type: string;
    spinnerStateLoaded: boolean;
}

export function SpinnerDatabaseStateChangeAction(spinnerStateLoaded: boolean): ISpinnerStateChangeAction {
    return {
        type: ActionConstants.SPINNER_DATABASE_STATE_CHANGE,
        spinnerStateLoaded: spinnerStateLoaded
    };
}