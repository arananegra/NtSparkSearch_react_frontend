import {ActionConstants} from "../ActionConstants";

export interface IWriteSequenceOnDatabaseSearchInputTextAction {
    type: string;
    textFromInputTextBox: boolean;
}

export function WriteSequenceOnDatabaseSearchInputTextAction(textFromInputTextBox: boolean): IWriteSequenceOnDatabaseSearchInputTextAction {
    return {
        type: ActionConstants.WRITE_SEQUENCE_TO_FETCH_ON_DATABASE_SEARCH_INPUT_TEXT,
        textFromInputTextBox: textFromInputTextBox
    };
}