import {connect} from "react-redux";
import {IReducers} from "../../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {ISettingsPageDispatchProps, ISettingsPageProps, SettingsPage} from "./SettingsPage";

const mapStateToProp = (state: IReducers): ISettingsPageProps => ({
    SettingsPage: state['reducers'].SettingsPageReducer._settingsPage
});

const mapDispatchToProps = (dispatch): ISettingsPageDispatchProps => ({
    //initializeSubSequenceGeneListFound: () => dispatch(InitializeSubSequenceSearchPageAction())
});

export const SettingsContainer = connect<ISettingsPageProps, ISettingsPageDispatchProps, {}>(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(SettingsPage));
