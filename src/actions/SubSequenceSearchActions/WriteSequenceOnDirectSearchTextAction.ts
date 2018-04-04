import {ActionConstants} from "../ActionConstants";

export interface IWriteSequenceOnDirectSearchTextAction {
    type: string;
    textFromInputTextBox: boolean;
}

export function WriteSequenceOnDirectSearchTextAction(textFromInputTextBox: boolean): IWriteSequenceOnDirectSearchTextAction {
    return {
        type: ActionConstants.WRITE_SEQUENCE_TO_FETCH_ON_DIRECT_SEARCH_INPUT_TEXT,
        textFromInputTextBox: textFromInputTextBox
    };
}