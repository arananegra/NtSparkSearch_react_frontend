import {connect} from "react-redux";
import {IReducers} from "../../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {DownloadPage, IDownloadPagePageState, IDownloadPageProps} from "./DownloadPage";
import {DownloadUnfilteredFastaAction} from "../../actions/DownloadActions/DownloadUnfilteredFastaAction";

const mapStateToProp = (state: IReducers): IDownloadPageProps => ({});

const mapDispatchToProps = (dispatch): IDownloadPagePageState => ({
    //initializeSubSequenceGeneListFound: () => dispatch(InitializeSubSequenceSearchPageAction())
    onSearchButtonPressedDownloadUnfilteredFasta: () => dispatch(DownloadUnfilteredFastaAction())

});

export const DownloadPageContainer = connect<IDownloadPageProps, IDownloadPagePageState, {}>(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(DownloadPage));
