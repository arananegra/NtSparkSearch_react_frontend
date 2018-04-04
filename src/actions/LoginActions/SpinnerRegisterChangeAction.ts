import {ActionConstants} from "../ActionConstants";

export interface ISpinnerRegisterChangeAction {
    type: string;
    spinnerStateRegisterLoaded: boolean;
}

export function SpinnerRegisterChangeAction(spinnerStateRegisterLoaded: boolean): ISpinnerRegisterChangeAction {
    return {
        type: ActionConstants.SPINNER_REGISTER_STATE_CHANGE,
        spinnerStateRegisterLoaded: spinnerStateRegisterLoaded
    };
}