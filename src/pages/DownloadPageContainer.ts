import {connect} from "react-redux";
import {IReducers} from "../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {DownloadPage} from "./DownloadPage";

const mapStateToProp = (state: IReducers) => ({
    //geneSearcherPage: state['reducers'].SubSequenceSearchPageReducer._geneSearcherPage
});

const mapDispatchToProps = (dispatch) => ({
    //initializeSubSequenceGeneListFound: () => dispatch(InitializeSubSequenceSearchPageAction())
});

export const DownloadPageContainer = connect(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(DownloadPage));
