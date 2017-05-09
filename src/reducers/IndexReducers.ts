import {combineReducers} from "redux";
import {SubSequenceSearchPageReducer, SubSequenceSearchPageState} from "./SubSequenceSearchPageReducer";

export default combineReducers <IReducers> ({
    SubSequenceSearchPageReducer
});

export interface IReducers {
    SubSequenceSearchPageReducer: SubSequenceSearchPageState;
}