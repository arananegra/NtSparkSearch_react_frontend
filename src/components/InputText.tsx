import * as React from "react";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export interface IInputTextProps {
    onChangeText: (event: object, newValue: string) => any;
    hintText: string;
    floatingLabelText: string;
}

export interface IState {

}

export class InputText extends React.Component<IInputTextProps,IState> {
    public constructor(props: IInputTextProps) {
        super(props);
    }


    public render() {
        return (
            <div>
                <MuiThemeProvider>
                    <TextField
                        id="text-field-controlled"
                        type="text"
                        hintText={this.props.hintText}
                        floatingLabelText={this.props.floatingLabelText}
                        onChange={this.props.onChangeText.bind(this)}/>
                </MuiThemeProvider>
            </div>
        );
    }
}