import {ActionConstants} from "../ActionConstants";

export interface IInitializeDatabaseSubSeqSearchPageAction {
    type: string;

}

export function InitializeDatabaseSubSeqSearchPageAction(): IInitializeDatabaseSubSeqSearchPageAction {
    return {
        type: ActionConstants.INITIALIZE_DATABASE_SUB_SEQUENCE_SEARCH_PAGE
    };
}