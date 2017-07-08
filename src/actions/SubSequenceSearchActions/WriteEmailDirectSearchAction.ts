import {ActionConstants} from "../ActionConstants";

export interface IWriteEmailDirectSearchAction {
    type: string;
    textFromInputTextBox: boolean;
}

export function WriteEmailDirectSearchAction(textFromInputTextBox: boolean): IWriteEmailDirectSearchAction {
    return {
        type: ActionConstants.WRITE_EMAIL_DIRECT_SEARCH,
        textFromInputTextBox: textFromInputTextBox
    };
}
