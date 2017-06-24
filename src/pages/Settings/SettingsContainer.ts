import {connect} from "react-redux";
import {IReducers} from "../../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {SettingsPage} from "./SettingsPage";

const mapStateToProp = (state: IReducers) => ({
    //geneSearcherPage: state['reducers'].SubSequenceSearchPageReducer._geneSearcherPage
});

const mapDispatchToProps = (dispatch) => ({
    //initializeSubSequenceGeneListFound: () => dispatch(InitializeSubSequenceSearchPageAction())
});

export const SettingsContainer = connect(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(SettingsPage));
