import * as React from "react";
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FormattedMessage} from "react-intl";
import Paper from 'material-ui/Paper';

export interface ISettingsPageProps {

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
        const style = {
            height: 70,

            color: "red"
        };
        return (
            <div className="container-fluid">
                <CSSTransitionGroup
                    transitionName="subsequence-search-page-transition"
                    transitionAppear={true}
                    transitionAppearTimeout={5000}
                    transitionEnterTimeout={5000}
                    transitionLeaveTimeout={5000}>
                    <MuiThemeProvider>
                        <div className="container-fluid row header-separtion-download-page col-md-offset-4 col-md-6">
                            <Paper style={style} zDepth={5}/>
                        </div>
                    </MuiThemeProvider>
                </CSSTransitionGroup>
            </div>
        );
    }
}