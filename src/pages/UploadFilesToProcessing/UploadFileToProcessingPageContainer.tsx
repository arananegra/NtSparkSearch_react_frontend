import {connect} from "react-redux";
import * as React from "react";
import {IReducers} from "../../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {
    IUploadFilesToProcessingPageDispatchProps, IUploadFilesToProcessingPageProps,
    UploadFilesToProcessingPage
} from "./UploadFilesToProcessingPage";
import {UploadExcelRequest} from "../../actions/UploadActions/UploadExcelRequest";
import {UploadFastaRequest} from "../../actions/UploadActions/UploadFastaRequest";

const mapStateToProp = (state: IReducers): IUploadFilesToProcessingPageProps => ({
    UploadFilesToProcessingPage : state['reducers'].UploadFilesToProcessingPageReducer._uploadFilesToProcessingPage
});

const mapDispatchToProps = (dispatch): IUploadFilesToProcessingPageDispatchProps => ({
    onExcelFileUpload: (formData) => dispatch(UploadExcelRequest(formData)),
    onFastaFileUpload :(formData) => dispatch(UploadFastaRequest(formData)),
});

export const UploadFileToProcessingPageContainer = connect<IUploadFilesToProcessingPageProps, IUploadFilesToProcessingPageDispatchProps, {}>(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(UploadFilesToProcessingPage));
