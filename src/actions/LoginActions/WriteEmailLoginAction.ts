import {ActionConstants} from "../ActionConstants";

export interface IWriteEmailLoginAction {
    type: string;
    email: string;
}

export function WriteEmailLoginAction(email: string): IWriteEmailLoginAction {
    return {
        type: ActionConstants.WRITE_LOGIN_EMAIL,
        email: email
    };
}