import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
                <MuiThemeProvider>
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