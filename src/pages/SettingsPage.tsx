import * as React from "react";
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FormattedMessage} from "react-intl";
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export interface ISettingsPageProps {
    onSearchButtonPressed?: (event: any) => any;
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
                <div className="container-fluid navigation-bar-component">
                    <MuiThemeProvider>
                                <Paper style={paperStyle} zDepth={5}>

                                    <div className="col-md-offset-5 header-remove">
                                        <h2 className="text-danger">Borrar base de datos</h2>

                                    </div>

                                    <RaisedButton className="col-md-offset-5 button-remove-collection"
                                                  value="Borrar coleccion de genes no filtrados"
                                                  label="Borrar coleccion de genes no filtrados"
                                                  onClick={this.props.onSearchButtonPressed}
                                                  primary={false}
                                                  secondary={true}/>
                                </Paper>
                    </MuiThemeProvider>
                </div>
            </CSSTransitionGroup>
        );
    }
}