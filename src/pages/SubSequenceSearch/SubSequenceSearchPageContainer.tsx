import {connect} from "react-redux";
import {
    ISubSequenceSearchPageDispatchProps, ISubSequenceSearchPageProps,
    SubSequenceSearchPage
} from "./SubSequenceSearchPage";
import * as React from "react";
import {InitializeSubSequenceSearchPageAction} from "../../actions/InitializeActions/InitializeSubSequenceSearchPageAction";
import {IReducers} from "../../reducers/IndexReducers";
import {injectIntl} from "react-intl";

const mapStateToProp = (state: IReducers): ISubSequenceSearchPageProps => ({
    geneSearcherPage: state['reducers'].SubSequenceSearchPageReducer._geneSearcherPage
});

const mapDispatchToProps = (dispatch): ISubSequenceSearchPageDispatchProps => ({
    initializeSubSequenceGeneListFound: () => dispatch(InitializeSubSequenceSearchPageAction())
});

export const SubSequenceSearchPageContainer = connect<ISubSequenceSearchPageProps, ISubSequenceSearchPageDispatchProps, {}>(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(SubSequenceSearchPage));
