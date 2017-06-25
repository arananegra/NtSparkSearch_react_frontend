import {ActionConstants} from "../ActionConstants";
export interface IRemoveUnfilteredSuccessAction {
    type: string;
    responseStatus: number;
}

export function RemoveUnfilteredSuccessAction(responseStatus: number): IRemoveUnfilteredSuccessAction {
    return {
        type: ActionConstants.REMOVE_UNFILTERED_SUCCESS,
        responseStatus: responseStatus,
    };
}
