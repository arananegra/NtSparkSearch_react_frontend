import * as React from "react";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {InputText} from "./CommonComponents/InputText";
import {ButtonComponent} from "./CommonComponents/ButtonComponent";
import Spinner from 'react-spinner-children';
import PasswordField from 'material-ui-password-field'
import ReCAPTCHA from "react-google-recaptcha"

export interface ILoginRegisterFormProps {

    loginAccessText: string,

    onChangeTextEmail: (event: object, newValue: string) => any;
    textEmail: string;
    valueToTextEmail: string;

    onChangeTextPassword: (event: object, newValue: string) => any;
    textPassword: string;
    valueToTextPassword: string;

    onButtonPressedLogin: (value) => any;
    onButtonPressedRegister: (value) => any;
    labelButtonLogin: string;
    labelButtonRegister?: string;
    valueButtonLogin?: string;
    valueButtonRegister?: string;

    spinnerLoadedLogin: boolean;
    spinnerLoadedRegister: boolean;
}

export interface IState {
    disabled: boolean;
}

export class LoginRegisterForm extends React.Component<ILoginRegisterFormProps, IState> {

    state = {
        disabled: true,
    };

    private onCaptchadAccepted() {
        this.setState({disabled: false});
    }

    private onCaptchadExpired() {
        this.setState({disabled: true});
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
                                    hintText={this.props.textEmail}
                                    valueToText={this.props.valueToTextEmail}
                                    floatingLabelText={this.props.textEmail}/>
                            </div>
                            <div className="login-register-div">
                                <PasswordField
                                    onChange={this.props.onChangeTextPassword}
                                    value={this.props.valueToTextPassword}
                                    floatingLabelText={this.props.textPassword}/>
                            </div>

                            <div className="login-register-captch">
                                <ReCAPTCHA
                                    ref="recaptcha"
                                    sitekey="6Lds8C4UAAAAAN-mE13rAttX8kgGyzD_yD5ryKNr"
                                    onChange={this.onCaptchadAccepted.bind(this)}
                                    onExpired={this.onCaptchadExpired.bind(this)}
                                />
                            </div>

                            <div className="login-register-button-login">
                                <Spinner loaded={this.props.spinnerLoadedLogin}>
                                    <ButtonComponent
                                        onButtonPressed={this.props.onButtonPressedLogin}
                                        label={this.props.labelButtonLogin}
                                        value={this.props.valueButtonLogin}
                                        primary={true}
                                        disabled={this.state.disabled}>
                                    </ButtonComponent>
                                </Spinner>
                            </div>

                            <div className="login-register-button-login">
                                <Spinner loaded={this.props.spinnerLoadedRegister}>
                                    <ButtonComponent
                                        onButtonPressed={this.props.onButtonPressedRegister}
                                        label={this.props.labelButtonRegister}
                                        value={this.props.valueButtonRegister}
                                        primary={true}
                                        disabled={this.state.disabled}>
                                    </ButtonComponent>
                                </Spinner>
                            </div>

                        </Paper>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
