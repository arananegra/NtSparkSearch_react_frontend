import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500, deepOrange500, deepOrange700,
    white, darkBlack, fullBlack,} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Constants} from "../../common/Constants";

export interface IButtonSearchComponentProps {
    onButtonPressed: (value) => any;
    label: string;
    value: string;
    primary: boolean
    secondary?: boolean
    disabled?: boolean
}

export interface IState {

}

export class ButtonComponent extends React.Component<IButtonSearchComponentProps, IState> {

    public constructor(props: IButtonSearchComponentProps) {
        super(props);
    }


    public render() {

        return (
            <div>
                <MuiThemeProvider muiTheme={Constants.muiTheme}>
                    <RaisedButton label={this.props.label} value={this.props.value}
                                  primary={this.props.primary}
                                  secondary={this.props.secondary}
                                  onClick={this.props.onButtonPressed}
                                  disabled={this.props.disabled}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}