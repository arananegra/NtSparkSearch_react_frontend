import {ActionConstants} from "../ActionConstants";

export interface ILoginSuccessAction {
    type: string;
}

export function LoginSuccessAction(): ILoginSuccessAction {
    return {
        type: ActionConstants.LOGIN_SUCCESS,
    };
}