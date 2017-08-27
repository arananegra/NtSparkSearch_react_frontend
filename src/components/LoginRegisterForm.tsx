import * as React from "react";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {InputText} from "./CommonComponents/InputText";
import ReactSignupLoginComponent from 'react-signup-login-component';
import {ButtonComponent} from "./CommonComponents/ButtonComponent";

export interface ILoginFormProps {
    onChangeTextEmail?: (event: object, newValue: string) => any;
    hintTextEmail?: string;
    floatingLabelTextEmail?: string;
    valueToTextEmail?: string;

    onChangeTextPassword?: (event: object, newValue: string) => any;
    hintTextPassword?: string;
    floatingLabelTextPassword?: string;
    valueToTextPassword?: string;

    onButtonPressed?: (value) => any;
    label?: string;
    value?: string;
    primary?: boolean
    secondary?: boolean
}

export interface IState {

}

export class LoginRegisterForm extends React.Component<ILoginFormProps, IState> {
    public constructor(props: ILoginFormProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="container-fluid login-register-component">
                        <Paper zDepth={5}>
                            <span className="login-title">Access page</span>
                            <div className="login-register-div">
                                <InputText
                                    onChangeText={this.props.onChangeTextEmail}
                                    hintText={this.props.hintTextEmail}
                                    floatingLabelText={this.props.floatingLabelTextEmail}
                                    valueToText={this.props.valueToTextEmail}/>
                            </div>
                            <div className="login-register-div">
                                <InputText
                                    onChangeText={this.props.onChangeTextPassword}
                                    hintText={this.props.hintTextPassword}
                                    floatingLabelText={this.props.floatingLabelTextPassword}
                                    valueToText={this.props.valueToTextPassword}/>
                            </div>

                            <div className="login-register-button-login">
                                <ButtonComponent
                                    onButtonPressed={this.props.onButtonPressed}
                                    label="Login"
                                    value="Login"
                                    primary={true}>
                                </ButtonComponent>
                            </div>
                        </Paper>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
