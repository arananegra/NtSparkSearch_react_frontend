import {ActionConstants} from "../ActionConstants";

export interface ILoginFailedAction {
    type: string;
}

export function LoginFailedAction(): ILoginFailedAction {
    return {
        type: ActionConstants.LOGIN_FAILED,
    };
}