import {combineReducers} from "redux";
import {SubSequenceSearchPageReducer, SubSequenceSearchPageState} from "./SubSequenceSearchPageReducer";
import {UploadFilesToProcessingPageReducer, UploadPageState} from "./UploadFilesToProcessingPageReducer";
import {DatabaseSubSeqSearchPageReducer, DatabaseSubSeqSearchPageState} from "./DatabaseSubSeqSearchPageReducer";
import {SettingsPageReducer, SettingsPageState} from "./SettingsReducer";
import {DownloadPageReducer, DownloadPageState} from "./DownloadPageReducer";
import {LoginPageReducer, LoginPageState} from "./LoginPageReducer";

export default combineReducers <IReducers> ({
    SubSequenceSearchPageReducer,
    UploadFilesToProcessingPageReducer,
    DatabaseSubSeqSearchPageReducer,
    SettingsPageReducer,
    DownloadPageReducer,
    LoginPageReducer
});

export interface IReducers {
    SubSequenceSearchPageReducer: SubSequenceSearchPageState;
    UploadFilesToProcessingPageReducer: UploadPageState;
    DatabaseSubSeqSearchPageReducer : DatabaseSubSeqSearchPageState;
    SettingsPageReducer : SettingsPageState;
    DownloadPageReducer : DownloadPageState;
    LoginPageReducer : LoginPageState;

}