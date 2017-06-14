import {connect} from "react-redux";
import {SubSequenceSearchPage} from "./SubSequenceSearchPage";
import * as React from "react";
import {InitializeSubSequenceSearchPageAction} from "../actions/InitializeSubSequenceSearchPageAction";
import {IReducers} from "../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {DatabaseSubSeqSearchPage} from "./DatabaseSubSeqSearchPage";

const mapStateToProp = (state: IReducers) => ({
    geneSearcherPage: state['reducers'].SubSequenceSearchPageReducer._geneSearcherPage
});

const mapDispatchToProps = (dispatch) => ({
    initializeSubSequenceGeneListFound: () => dispatch(InitializeSubSequenceSearchPageAction())
});

export const DatabaseSubSeqSearchPageContainer = connect(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(DatabaseSubSeqSearchPage));
