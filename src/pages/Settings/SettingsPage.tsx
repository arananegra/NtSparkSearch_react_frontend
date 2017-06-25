import * as React from "react";
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {FormattedMessage} from "react-intl";
import {SettingsPaperComponent} from "../../components/SettingsComponents/SettingsPaperComponent";
import {MessagesConstants} from "../../i18n/MessagesConstants";
import {SettingsAboutComponent} from "../../components/SettingsComponents/SettingsAboutComponent";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {store} from "../../components/AppPipeline";
import {SimpleModalRequest} from "../../components/CommonComponents/SimpleModalRequest";
import {ShowModalDialogRemoveUnfilteredAction} from "../../actions/SettingsActions/ShowModalDialogRemoveUnfilteredAction";
import {ShowModalDialogRemoveFilteredAction} from "../../actions/SettingsActions/ShowModalDialogRemoveFilteredAction";
import {SettingsPageDTO} from "../../domain/SettingsPage/SettingsPageDTO";
import {Constants} from "../../common/Constants";


export interface ISettingsPageProps {
    SettingsPage: SettingsPageDTO;
    intl?: any
}

export interface ISettingsPageDispatchProps {
    // onButtonRemoveUnfiltered?: (event: any) => any;
    // onButtonRemoveFiltered?: (event: any) => any;
}

export interface ISettingsPageState {

}

export class SettingsPage extends React.Component<ISettingsPageProps & ISettingsPageDispatchProps & InjectedIntlProps, ISettingsPageState> {
    public constructor(props: ISettingsPageProps & ISettingsPageDispatchProps & InjectedIntlProps) {
        super(props);
    }

    private onRemoveUnfilteredClicked() {
        store.dispatch(ShowModalDialogRemoveUnfilteredAction(true))
    }

    private onRemoveFilteredClicked() {
        store.dispatch(ShowModalDialogRemoveFilteredAction(true))
    }

    private manageOnClickModalUnfiltered(option: any) {
        let showModal: boolean;

        console.log("WTF en unfiltered!: ", option);

        showModal = false;

        if (option == Constants.SUBMIT_BUTTON_PRESSED_VALUE) {
            showModal = true;
        } else if (option == Constants.CANCEL_BUTTON_PRESSED_VALUE) {
            showModal = false;
        }

        store.dispatch(ShowModalDialogRemoveUnfilteredAction(
            showModal
        ));
    }

    private manageOnClickModalFiltered(option: any) {
        let showModal: boolean;

        console.log("WTF en filtered!: ", option);

        showModal = false;

        if (option == Constants.SUBMIT_BUTTON_PRESSED_VALUE) {
            showModal = true;
        } else if (option == Constants.CANCEL_BUTTON_PRESSED_VALUE) {
            showModal = false;
        }

        store.dispatch(ShowModalDialogRemoveFilteredAction(
            showModal
        ));
    }

    public render() {
        return (

            <CSSTransitionGroup
                transitionName="subsequence-search-page-transition"
                transitionAppear={true}
                transitionAppearTimeout={5000}
                transitionEnterTimeout={5000}
                transitionLeaveTimeout={5000}>
                <div>

                    <SettingsPaperComponent
                        paperMainText={this.props.intl.formatMessage({id: MessagesConstants.SETTINGS_TEXT_REMOVE_UNFILTERED})}
                        paperButtonText={this.props.intl.formatMessage({id: MessagesConstants.SETTINGS_BUTTON_REMOVE_UNFILTERED})}
                        onButtonPressed={this.onRemoveUnfilteredClicked.bind(this)}/>
                    <SimpleModalRequest
                        showDialog={this.props.SettingsPage._showModalDialogRemoveUnfiltered}
                        onClick={this.manageOnClickModalUnfiltered.bind(this)}
                        dialogTitle={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_TITTLE_REMOVE_UNFILTERED})}
                        dialogText={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_TEXT_REMOVE_UNFILTERED})}
                        acceptButtonLabel={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_ACCEPT_BUTTON})}
                        cancelButtonLabel={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_CANCEL_BUTTON})}/>

                    <div className="between-components-space">
                        <SettingsPaperComponent
                            paperMainText={this.props.intl.formatMessage({id: MessagesConstants.SETTINGS_TEXT_REMOVE_FILTERED})}
                            paperButtonText={this.props.intl.formatMessage({id: MessagesConstants.SETTINGS_BUTTON_REMOVE_FILTERED})}
                            onButtonPressed={this.onRemoveFilteredClicked.bind(this)}/>
                        <SimpleModalRequest
                            showDialog={this.props.SettingsPage._showModalDialogRemoveFiltered}
                            onClick={this.manageOnClickModalFiltered.bind(this)}
                            dialogTitle={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_TITTLE_REMOVE_FILTERED})}
                            dialogText={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_TEXT_REMOVE_FILTERED})}
                            acceptButtonLabel={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_ACCEPT_BUTTON})}
                            cancelButtonLabel={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_CANCEL_BUTTON})}/>

                    </div>
                    <div className="between-components-space">
                        <SettingsAboutComponent
                            title={this.props.intl.formatMessage({id: MessagesConstants.ABOUT_APP_TITLE})}
                            textMessage={this.props.intl.formatMessage({id: MessagesConstants.ABOUT_APP_BODY})}
                            buttonAcceptText={this.props.intl.formatMessage({id: MessagesConstants.ABOUT_APP_BUTTON_TEXT})}/>
                    </div>

                </div>
            </CSSTransitionGroup>
        );
    }
}