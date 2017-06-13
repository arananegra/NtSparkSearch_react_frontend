import * as React from "react";
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FormattedMessage} from "react-intl";
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {SettingsPaperComponent} from "../components/SettingsPaperComponent";
import {MessagesConstants} from "../i18n/MessagesConstants";

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

                </div>
            </CSSTransitionGroup>
        );
    }
}