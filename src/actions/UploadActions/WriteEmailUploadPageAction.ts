import {ActionConstants} from "../ActionConstants";

export interface IWriteOnInputText {
    type: string;
    textFromInputTextBox: boolean;
}

export function WriteEmailUploadPageAction(textFromInputTextBox: boolean): IWriteOnInputText {
    return {
        type: ActionConstants.WRITE_EMAIL_UPLOAD_INPUT_TEXT,
        textFromInputTextBox: textFromInputTextBox
    };
}