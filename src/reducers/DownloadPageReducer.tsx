import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";

export class DownloadPageState {

    public constructor() {

    }
}

export function DownloadPageReducer(state: DownloadPageState = new DownloadPageState(),
                                    action: Action): DownloadPageState {

    let newState: DownloadPageState;

    switch (action.type) {

        case ActionConstants.DOWNLOAD_UNFILTERED_FASTA:
            return state;

        default:
            return state;
    }
}