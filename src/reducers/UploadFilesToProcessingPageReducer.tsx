import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";
import {GeneSubSequenceSearcherDTO} from "../domain/GeneSubSequenceSearcherDTO";
import {GeneSearchPageDTO} from "../domain/GeneSearchPageDTO";
import {GeneSubsequenceResultDTO} from "../domain/GeneSubsequenceResultDTO";
import {TableHeaderColumnDTO} from "../domain/TableHeaderColumnDTO";
import {GeneDTO} from "../domain/GeneDTO";

export class UploadPageState {

    public textFromApi: string;

    public constructor() {
        this.textFromApi = "NADA";
    }
}

export function UploadFilesToProcessingPageReducer(state: UploadPageState = new UploadPageState(),
                                                   action: Action): UploadPageState {

    let newState: UploadPageState;

    switch (action.type) {
        case ActionConstants.LOAD_SIMPLE_SUCCES:

            let newTextToState: string;

            newTextToState = objectAssign({}, state.textFromApi, {});

            newTextToState = action["textFromApi"];

            newState = objectAssign({}, state, {textFromApi: newTextToState});
            return newState;

        default:
            return state;
    }
}