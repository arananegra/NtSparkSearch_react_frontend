import {combineReducers} from "redux";
import {SubSequenceSearchPageReducer, SubSequenceSearchPageState} from "./SubSequenceSearchPageReducer";
import {UploadFilesToProcessingPageReducer, UploadPageState} from "./UploadFilesToProcessingPageReducer";
import {DatabaseSubSeqSearchPageReducer, DatabaseSubSeqSearchPageState} from "./DatabaseSubSeqSearchPageReducer";
import {SettingsPageReducer, SettingsPageState} from "./SettingsReducer";
import {DownloadPageReducer, DownloadPageState} from "./DownloadPageReducer";

export default combineReducers <IReducers> ({
    SubSequenceSearchPageReducer,
    UploadFilesToProcessingPageReducer,
    DatabaseSubSeqSearchPageReducer,
    SettingsPageReducer,
    DownloadPageReducer,
});

export interface IReducers {
    SubSequenceSearchPageReducer: SubSequenceSearchPageState;
    UploadFilesToProcessingPageReducer: UploadPageState;
    DatabaseSubSeqSearchPageReducer : DatabaseSubSeqSearchPageState;
    SettingsPageReducer : SettingsPageState;
    DownloadPageReducer : DownloadPageState;
}