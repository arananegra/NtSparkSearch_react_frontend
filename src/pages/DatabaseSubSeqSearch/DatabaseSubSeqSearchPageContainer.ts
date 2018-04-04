import {connect} from "react-redux";
import {InitializeSubSequenceSearchPageAction} from "../../actions/InitializeActions/InitializeSubSequenceSearchPageAction";
import {IReducers} from "../../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {
    DatabaseSubSeqSearchPage, IDatabaseSubSeqSearchPageDispatchProps,
    IDatabaseSubSeqSearchPageProps
} from "./DatabaseSubSeqSearchPage";
import {InitializeDatabaseSubSeqSearchPageAction} from "../../actions/InitializeActions/InitializeDatabaseSubSeqSearchPageAction";
import {WriteSequenceOnDatabaseSearchInputTextAction} from "../../actions/DatabaseSequenceSearchActions/WriteSequenceOnDatabaseSearchInputTextAction";
import {SearchDatabaseAction} from "../../actions/DatabaseSequenceSearchActions/SearchDatabaseAction";

const mapStateToProp = (state: IReducers): IDatabaseSubSeqSearchPageProps => ({
    geneSearcherPage: state['reducers'].DatabaseSubSeqSearchPageReducer._geneSearcherPage
});

const mapDispatchToProps = (dispatch): IDatabaseSubSeqSearchPageDispatchProps => ({
    initializeSubSequenceGeneListFound: () => dispatch(InitializeDatabaseSubSeqSearchPageAction()),
    onSequenceInputTextBox: (sequenceToFetch) => dispatch(WriteSequenceOnDatabaseSearchInputTextAction(sequenceToFetch)),
    onDatabaseSearchClicked: (sequence) => dispatch(SearchDatabaseAction(sequence)),
});

export const DatabaseSubSeqSearchPageContainer = connect<IDatabaseSubSeqSearchPageProps, IDatabaseSubSeqSearchPageDispatchProps, {}>(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(DatabaseSubSeqSearchPage));
