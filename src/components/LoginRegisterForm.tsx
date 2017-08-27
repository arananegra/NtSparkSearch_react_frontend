import * as React from "react";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {InputText} from "./CommonComponents/InputText";
import ReactSignupLoginComponent from 'react-signup-login-component';

export interface ILoginFormProps {

}

export interface IState {

}

export class LoginForm extends React.Component<ILoginFormProps, IState> {
    public constructor(props: ILoginFormProps) {
        super(props);
    }

    private signupWasClickedCallback = (data) => {
        console.log(data);
    };

    private loginWasClickedCallback = (data) => {
        console.log(data);
    };

    private recoverPasswordWasClickedCallback = (data) => {
        console.log(data);
    };

    public render() {
        return (
            <div className="container-fluid login-register-component">
                <ReactSignupLoginComponent
                    title="NT Spark Search login"
                    handleSignup={this.signupWasClickedCallback.bind(this)}
                    handleLogin={this.loginWasClickedCallback.bind(this)}
                    handleRecoverPassword={this.recoverPasswordWasClickedCallback.bind(this)}
                />
            </div>
        );
    }
}
