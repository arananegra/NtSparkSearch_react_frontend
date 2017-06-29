import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";

export class DownloadPageState {

    public constructor() {

    }
}

export function DownloadPageReducer(state: DownloadPageState = new DownloadPageState(),
                                    action: Action): DownloadPageState {

    switch (action.type) {

        // case ActionConstants.DOWNLOAD_UNFILTERED_FASTA:
        //     return state;
        //
        // case ActionConstants.DOWNLOAD_FILTERED_FASTA:
        //     return state;
        //
        // case ActionConstants.DOWNLOAD_UNFILTERED_IDS:
        //     return state;
        //
        // case ActionConstants.DOWNLOAD_FILTERED_IDS:
        //     return state;

        default:
            return state;
    }
}