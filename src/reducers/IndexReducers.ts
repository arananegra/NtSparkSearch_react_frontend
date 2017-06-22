import {combineReducers} from "redux";
import {SubSequenceSearchPageReducer, SubSequenceSearchPageState} from "./SubSequenceSearchPageReducer";
import {UploadFilesToProcessingPageReducer, UploadPageState} from "./UploadFilesToProcessingPageReducer";
import {DatabaseSubSeqSearchPageReducer, DatabaseSubSeqSearchPageState} from "./DatabaseSubSeqSearchPageReducer";

export default combineReducers <IReducers> ({
    SubSequenceSearchPageReducer,
    UploadFilesToProcessingPageReducer,
    DatabaseSubSeqSearchPageReducer
});

export interface IReducers {
    SubSequenceSearchPageReducer: SubSequenceSearchPageState;
    UploadFilesToProcessingPageReducer: UploadPageState;
    DatabaseSubSeqSearchPageReducer : DatabaseSubSeqSearchPageState;
}