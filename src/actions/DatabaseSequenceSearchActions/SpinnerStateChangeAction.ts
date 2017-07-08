import {ActionConstants} from "../ActionConstants";

export interface ISpinnerStateChangeAction {
    type: string;
    spinnerStateLoaded: boolean;
}

export function SpinnerStateChangeAction(spinnerStateLoaded: boolean): ISpinnerStateChangeAction {
    return {
        type: ActionConstants.SPINNER_STATE_CHANGE,
        spinnerStateLoaded: spinnerStateLoaded
    };
}