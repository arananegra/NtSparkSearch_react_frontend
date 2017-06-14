import {ActionConstants} from "./ActionConstants";

export interface ILoadSimpleApiSuccessAction {
    type: string;
    textFromApi:any,
}

export function LoadSimpleApiSuccessAction(textFromApi): ILoadSimpleApiSuccessAction {
    return {
        type: ActionConstants.LOAD_SIMPLE_SUCCES,
        textFromApi: textFromApi,
    };
}
