import {connect} from "react-redux";
import * as React from "react";
import {IReducers} from "../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {UploadFilesToProcessingPage} from "./UploadFilesToProcessingPage";
import {LoadSimpleAction} from "../actions/LoadSimpleAction";

const mapStateToProp = (state: IReducers) => ({
    //geneSearcherPage: state['reducers'].SubSequenceSearchPageReducer._geneSearcherPage
    textFromApiCall: state['reducers'].UploadFilesToProcessingPageReducer.textFromApi
});

const mapDispatchToProps = (dispatch) => ({
    //initializeSubSequenceGeneListFound: () => dispatch(InitializeSubSequenceSearchPageAction())
    onClickRenewTextApi: () => dispatch(LoadSimpleAction())
});

export const UploadFileToProcessingPageContainer = connect(
    mapStateToProp,
    mapDispatchToProps
)((UploadFilesToProcessingPage));
