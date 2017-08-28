import {ActionConstants} from "../ActionConstants";

export interface IWritePasswordLoginAction {
    type: string;
    password: string;
}

export function WritePasswordLoginAction(password: string): IWritePasswordLoginAction {
    return {
        type: ActionConstants.WRITE_LOGIN_PASSWORD,
        password: password
    };
}