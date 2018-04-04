import {connect} from "react-redux";
import {IReducers} from "../../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {DownloadPage, IDownloadPageDispatchProps, IDownloadPagePageState, IDownloadPageProps} from "./DownloadPage";
import {DownloadUnfilteredFastaAction} from "../../actions/DownloadActions/DownloadUnfilteredFastaAction";
import {DownloadFilteredFastaAction} from "../../actions/DownloadActions/DownloadFilteredFastaAction";
import {DownloadUnfilteredIdsAction} from "../../actions/DownloadActions/DownloadUnfilteredIdsAction";
import {DownloadFilteredIdsAction} from "../../actions/DownloadActions/DownloadFilteredIdsAction";

const mapStateToProp = (state: IReducers): IDownloadPageProps => ({});

const mapDispatchToProps = (dispatch): IDownloadPageDispatchProps => ({
    onSearchButtonPressedDownloadUnfilteredFasta: () => dispatch(DownloadUnfilteredFastaAction()),
    onSearchButtonPressedDownloadFilteredFasta: () => dispatch(DownloadFilteredFastaAction()),
    onSearchButtonPressedDownloadUnfilteredIds: () => dispatch(DownloadUnfilteredIdsAction()),
    onSearchButtonPressedDownloadFilteredIds: () => dispatch(DownloadFilteredIdsAction()),
});

export const DownloadPageContainer = connect<IDownloadPageProps, IDownloadPageDispatchProps, {}>(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(DownloadPage));
