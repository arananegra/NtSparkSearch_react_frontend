import {connect} from "react-redux";
import {
    ISubSequenceSearchPageDispatchProps, ISubSequenceSearchPageProps,
    SubSequenceSearchPage
} from "./SubSequenceSearchPage";
import * as React from "react";
import {InitializeSubSequenceSearchPageAction} from "../../actions/InitializeActions/InitializeSubSequenceSearchPageAction";
import {IReducers} from "../../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {WriteSequenceOnDirectSearchTextAction} from "../../actions/SubSequenceSearchActions/WriteSequenceOnDirectSearchTextAction";
import {WriteGenesOnDirectSearchTextAction} from "../../actions/SubSequenceSearchActions/WriteGenesOnDirectSearchTextAction";
import {SearchDatabaseAction} from "../../actions/DatabaseSequenceSearchActions/SearchDatabaseAction";
import {SearchDirectAction} from "../../actions/SubSequenceSearchActions/SearchDirectAction";
import {WriteEmailDirectSearchAction} from "../../actions/SubSequenceSearchActions/WriteEmailDirectSearchAction";

const mapStateToProp = (state: IReducers): ISubSequenceSearchPageProps => ({
    geneSearcherPage: state['reducers'].SubSequenceSearchPageReducer._geneSearcherPage
});

const mapDispatchToProps = (dispatch): ISubSequenceSearchPageDispatchProps => ({
    initializeSubSequenceGeneListFound: () => dispatch(InitializeSubSequenceSearchPageAction()),
    onSequenceInputTextBox: (sequenceToFetch) => dispatch(WriteSequenceOnDirectSearchTextAction(sequenceToFetch)),
    onGenesInputTexBox: (genesToFetch) => dispatch(WriteGenesOnDirectSearchTextAction(genesToFetch)),
    onSearchButtonPressed: (sequenceToFetch, genesToFetch) => dispatch(SearchDirectAction(sequenceToFetch, genesToFetch)),
    onEmailTextBox: (email)  => dispatch(WriteEmailDirectSearchAction(email)),
});

export const SubSequenceSearchPageContainer = connect<ISubSequenceSearchPageProps, ISubSequenceSearchPageDispatchProps, {}>(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(SubSequenceSearchPage));
