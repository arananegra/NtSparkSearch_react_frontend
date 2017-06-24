import * as React from "react";
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FormattedMessage} from "react-intl";
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {SettingsPaperComponent} from "../../components/SettingsComponents/SettingsPaperComponent";
import {MessagesConstants} from "../../i18n/MessagesConstants";
import {SettingsAboutComponent} from "../../components/SettingsComponents/SettingsAboutComponent";
import {ShowModalDialogSearchRequestAction} from "../../actions/ShowModalDialogSearchRequestAction";
import {store} from "../../components/AppPipeline";
import {Constants} from "../../common/Constants";

export interface ISettingsPageProps {
    onButtonRemoveUnfiltered?: (event: any) => any;
    onButtonRemoveFiltered?: (event: any) => any;
    intl: any
}

export interface ISettingsPageState {

}

export class SettingsPage extends React.Component<ISettingsPageProps, ISettingsPageState> {
    public constructor(props: ISettingsPageProps) {
        super(props);
    }

    public componentWillMount() {

    }

    private manageOnClickModalForClase(option: any) {
        let showModal: boolean;

        console.log("WTF!: ", option);

        showModal = false;

        if (option == Constants.SUBMIT_BUTTON_PRESSED_VALUE) {
            showModal = true;
        } else if (option == Constants.CANCEL_BUTTON_PRESSED_VALUE) {
            showModal = false;
        }

        store.dispatch(ShowModalDialogSearchRequestAction(
            showModal
        ));
    }


    public render() {
        const paperStyle = {
            height: "150px",
        };

        const buttonStyle = {
            height: "30px",
            alignContent: "center"
        };
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
                        onButtonPressed={this.props.onButtonRemoveUnfiltered}/>

                    <div className="between-components-space">
                        <SettingsPaperComponent
                            paperMainText={this.props.intl.formatMessage({id: MessagesConstants.SETTINGS_TEXT_REMOVE_FILTERED})}
                            paperButtonText={this.props.intl.formatMessage({id: MessagesConstants.SETTINGS_BUTTON_REMOVE_FILTERED})}
                            onButtonPressed={this.props.onButtonRemoveUnfiltered}/>
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