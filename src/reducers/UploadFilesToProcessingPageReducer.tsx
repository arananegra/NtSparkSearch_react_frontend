import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";

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