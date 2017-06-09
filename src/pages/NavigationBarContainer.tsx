import {connect} from "react-redux";
import * as React from "react";
import {InitializeSubSequenceSearchPageAction} from "../actions/InitializeSubSequenceSearchPageAction";
import {IReducers} from "../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {NavigationBarComponent} from "../components/NavigationBarComponent";

const mapStateToProp = (state: IReducers) => ({
    //geneSearcherPage: state['reducers'].SubSequenceSearchPageReducer._geneSearcherPage
});

const mapDispatchToProps = (dispatch) => ({
    //initializeSubSequenceGeneListFound: () => dispatch(InitializeSubSequenceSearchPageAction())
});

export const NavigationBarContainer = connect(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(NavigationBarComponent));
