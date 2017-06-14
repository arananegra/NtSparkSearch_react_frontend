import {combineReducers} from "redux";
import {SubSequenceSearchPageReducer, SubSequenceSearchPageState} from "./SubSequenceSearchPageReducer";
import {UploadFilesToProcessingPageReducer, UploadPageState} from "./UploadFilesToProcessingPageReducer";

export default combineReducers <IReducers> ({
    SubSequenceSearchPageReducer,
    UploadFilesToProcessingPageReducer
});

export interface IReducers {
    SubSequenceSearchPageReducer: SubSequenceSearchPageState;
    UploadFilesToProcessingPageReducer: UploadPageState;
}