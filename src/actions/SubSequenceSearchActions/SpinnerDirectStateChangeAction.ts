import {ActionConstants} from "../ActionConstants";

export interface ISpinnerDirectStateChangeAction {
    type: string;
    spinnerStateLoaded: boolean;
}

export function SpinnerDirectStateChangeAction(spinnerStateLoaded: boolean): ISpinnerDirectStateChangeAction {
    return {
        type: ActionConstants.SPINNER_DIRECT_STATE_CHANGE,
        spinnerStateLoaded: spinnerStateLoaded
    };
}