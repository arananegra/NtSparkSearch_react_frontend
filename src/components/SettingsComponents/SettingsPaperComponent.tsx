import * as React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FormattedMessage} from "react-intl";
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Constants} from "../../common/Constants";

export interface ISettingsPaperProps {
    onButtonPressed: (event: any) => any;
    paperMainText: string;
    paperButtonText: string;
}

export interface ISettingsPaperState {

}

export class SettingsPaperComponent extends React.Component<ISettingsPaperProps, ISettingsPaperState> {
    public constructor(props: ISettingsPaperProps) {
        super(props);
    }

    public componentWillMount() {

    }

    public render() {
        const paperStyle = {
            height: "150px",
        };

        const titleColor = {
            color: "#66bb6a",
        };

        return (
            <div className="container-fluid component-margins">
                <MuiThemeProvider muiTheme={Constants.muiTheme}>
                    <Paper style={paperStyle} zDepth={5}>

                        <div className="row">
                            <div className="col-xs-offset-3">
                                <h2 style={titleColor}>{this.props.paperMainText}</h2>
                            </div>
                        </div>

                        <div className="row">
                            <RaisedButton className="col-xs-offset-3 button-remove-collection"
                                          value={this.props.paperButtonText}
                                          label={this.props.paperButtonText}
                                          onClick={this.props.onButtonPressed}
                                          primary={true}/>
                        </div>
                    </Paper>
                </MuiThemeProvider>
            </div>
        );
    }
}