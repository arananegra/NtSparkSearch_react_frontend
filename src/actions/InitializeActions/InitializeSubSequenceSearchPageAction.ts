import {ActionConstants} from "../ActionConstants";

export interface IInitializeSubSequenceSearchPageAction {
    type: string; 

}

export function InitializeSubSequenceSearchPageAction(): IInitializeSubSequenceSearchPageAction {
    return {
        type: ActionConstants.INITIALIZE_SUB_SEQUENCE_SEARCH_PAGE
    };
}