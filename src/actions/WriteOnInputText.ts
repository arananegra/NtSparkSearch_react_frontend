import {ActionConstants} from "./ActionConstants";

export interface IWriteOnInputText {
    type: string;
    textFromInputTextBox: boolean;
}

export function WriteOnInputText(textFromInputTextBox: boolean): IWriteOnInputText {
    return {
        type: ActionConstants.WRITE_ON_INPUT_TEXT,
        textFromInputTextBox: textFromInputTextBox
    };
}