import {ActionConstants} from "../ActionConstants";
export interface IRemoveUnfilteredSuccessAction {
    type: string;
}

export function RemoveUnfilteredSuccessAction(): IRemoveUnfilteredSuccessAction {
    return {
        type: ActionConstants.REMOVE_UNFILTERED_SUCCESS,
    };
}
