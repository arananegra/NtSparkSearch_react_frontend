import * as React from "react";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {InputText} from "./CommonComponents/InputText";
import ReactSignupLoginComponent from 'react-signup-login-component';
import {ButtonComponent} from "./CommonComponents/ButtonComponent";

export interface ILoginFormProps {

    loginAccessText: string,

    onChangeTextEmail: (event: object, newValue: string) => any;
    floatingLabelTextEmail: string;
    valueToTextEmail?: string;

    onChangeTextPassword: (event: object, newValue: string) => any;
    floatingLabelTextPassword: string;
    valueToTextPassword?: string;

    onButtonPressed: (value) => any;
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
                            <div className="col-md-10">
                                <span className="login-title">{this.props.loginAccessText}</span>
                            </div>

                            <div className="login-register-div">
                                <InputText
                                    onChangeText={this.props.onChangeTextEmail}
                                    floatingLabelText={this.props.floatingLabelTextEmail}
                                    valueToText={this.props.valueToTextEmail}/>
                            </div>
                            <div className="login-register-div">
                                <InputText
                                    onChangeText={this.props.onChangeTextPassword}
                                    floatingLabelText={this.props.floatingLabelTextPassword}
                                    valueToText={this.props.valueToTextPassword}
                                    passwordField="password"/>
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
