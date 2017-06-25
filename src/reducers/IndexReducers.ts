import {combineReducers} from "redux";
import {SubSequenceSearchPageReducer, SubSequenceSearchPageState} from "./SubSequenceSearchPageReducer";
import {UploadFilesToProcessingPageReducer, UploadPageState} from "./UploadFilesToProcessingPageReducer";
import {DatabaseSubSeqSearchPageReducer, DatabaseSubSeqSearchPageState} from "./DatabaseSubSeqSearchPageReducer";
import {SettingsPageReducer, SettingsPageState} from "./SettingsReducer";

export default combineReducers <IReducers> ({
    SubSequenceSearchPageReducer,
    UploadFilesToProcessingPageReducer,
    DatabaseSubSeqSearchPageReducer,
    SettingsPageReducer
});

export interface IReducers {
    SubSequenceSearchPageReducer: SubSequenceSearchPageState;
    UploadFilesToProcessingPageReducer: UploadPageState;
    DatabaseSubSeqSearchPageReducer : DatabaseSubSeqSearchPageState;
    SettingsPageReducer : SettingsPageState;
}