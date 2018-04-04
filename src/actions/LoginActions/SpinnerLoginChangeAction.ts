import {ActionConstants} from "../ActionConstants";

export interface ISpinnerLoginChangeAction {
    type: string;
    spinnerStateLoaded: boolean;
}

export function SpinnerLoginChangeAction(spinnerStateLoaded: boolean): ISpinnerLoginChangeAction {
    return {
        type: ActionConstants.SPINNER_LOGIN_STATE_CHANGE,
        spinnerStateLoaded: spinnerStateLoaded
    };
}