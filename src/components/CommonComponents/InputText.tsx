import * as React from "react";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Constants} from "../../common/Constants";

export interface IInputTextProps {
    onChangeText: (event: object, newValue: string) => any;
    hintText?: string;
    floatingLabelText?: string;
    valueToText?: string;
    passwordField?: string;
}

export interface IState {

}

export class InputText extends React.Component<IInputTextProps, IState> {
    public constructor(props: IInputTextProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={Constants.muiTheme}>
                    <TextField
                        id="text-field-controlled"
                        type={this.props.passwordField}
                        hintText={this.props.hintText}
                        floatingLabelText={this.props.floatingLabelText}
                        onChange={this.props.onChangeText}
                        value={this.props.valueToText}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}