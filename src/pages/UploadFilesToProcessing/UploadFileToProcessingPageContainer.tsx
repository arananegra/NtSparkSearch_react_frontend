import {connect} from "react-redux";
import * as React from "react";
import {IReducers} from "../../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {
    IUploadFilesToProcessingPageDispatchProps, IUploadFilesToProcessingPageProps,
    UploadFilesToProcessingPage
} from "./UploadFilesToProcessingPage";
import {LoadSimpleAction} from "../../actions/LoadSimpleAction";

const mapStateToProp = (state: IReducers): IUploadFilesToProcessingPageProps => ({
    textFromApiCall: state['reducers'].UploadFilesToProcessingPageReducer.textFromApi,
    UploadFilesToProcessingPage : state['reducers'].UploadFilesToProcessingPageReducer._uploadFilesToProcessingPage
});

const mapDispatchToProps = (dispatch): IUploadFilesToProcessingPageDispatchProps => ({
    onClickRenewTextApi: () => dispatch(LoadSimpleAction())
});

export const UploadFileToProcessingPageContainer = connect<IUploadFilesToProcessingPageProps, IUploadFilesToProcessingPageDispatchProps, {}>(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(UploadFilesToProcessingPage));
