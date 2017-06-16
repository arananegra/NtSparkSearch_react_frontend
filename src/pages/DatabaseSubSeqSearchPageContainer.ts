import {connect} from "react-redux";
import {SubSequenceSearchPage} from "./SubSequenceSearchPage";
import * as React from "react";
import {InitializeSubSequenceSearchPageAction} from "../actions/InitializeSubSequenceSearchPageAction";
import {IReducers} from "../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {
    DatabaseSubSeqSearchPage, IDatabaseSubSeqSearchPageDispatchProps, IDatabaseSubSeqSearchPageOwnProps,
    IDatabaseSubSeqSearchPageProps
} from "./DatabaseSubSeqSearchPage";

const mapStateToProp = (state: IReducers): IDatabaseSubSeqSearchPageProps => ({
    geneSearcherPage: state['reducers'].SubSequenceSearchPageReducer._geneSearcherPage
});

const mapDispatchToProps = (dispatch): IDatabaseSubSeqSearchPageDispatchProps => ({
    initializeSubSequenceGeneListFound: () => dispatch(InitializeSubSequenceSearchPageAction())
});

export const DatabaseSubSeqSearchPageContainer = connect<IDatabaseSubSeqSearchPageProps, IDatabaseSubSeqSearchPageDispatchProps, IDatabaseSubSeqSearchPageOwnProps>(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(DatabaseSubSeqSearchPage));
