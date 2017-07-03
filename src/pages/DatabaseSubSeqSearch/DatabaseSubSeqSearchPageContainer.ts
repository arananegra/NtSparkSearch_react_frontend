import {connect} from "react-redux";
import {InitializeSubSequenceSearchPageAction} from "../../actions/InitializeActions/InitializeSubSequenceSearchPageAction";
import {IReducers} from "../../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {
    DatabaseSubSeqSearchPage, IDatabaseSubSeqSearchPageDispatchProps,
    IDatabaseSubSeqSearchPageProps
} from "./DatabaseSubSeqSearchPage";
import {InitializeDatabaseSubSeqSearchPageAction} from "../../actions/InitializeActions/InitializeDatabaseSubSeqSearchPageAction";
import {WriteOnInputText} from "../../actions/WriteOnInputText";

const mapStateToProp = (state: IReducers): IDatabaseSubSeqSearchPageProps => ({
    geneSearcherPage: state['reducers'].DatabaseSubSeqSearchPageReducer._geneSearcherPage
});

const mapDispatchToProps = (dispatch): IDatabaseSubSeqSearchPageDispatchProps => ({
    initializeSubSequenceGeneListFound: () => dispatch(InitializeDatabaseSubSeqSearchPageAction()),
    onSequenceInputTextBox : (sequenceToFetch) => dispatch(WriteOnInputText(sequenceToFetch)),
});

export const DatabaseSubSeqSearchPageContainer = connect<IDatabaseSubSeqSearchPageProps, IDatabaseSubSeqSearchPageDispatchProps, {}>(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(DatabaseSubSeqSearchPage));
