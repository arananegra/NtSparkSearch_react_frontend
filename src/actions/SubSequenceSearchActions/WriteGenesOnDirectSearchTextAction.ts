import {ActionConstants} from "../ActionConstants";

export interface IWriteGenesOnDirectSearchTextAction {
    type: string;
    textFromInputTextBox: boolean;
}

export function WriteGenesOnDirectSearchTextAction(textFromInputTextBox: boolean): IWriteGenesOnDirectSearchTextAction {
    return {
        type: ActionConstants.WRITE_GENES_TO_FETCH_ON_DIRECT_SEARCH_INPUT_TEXT,
        textFromInputTextBox: textFromInputTextBox
    };
}