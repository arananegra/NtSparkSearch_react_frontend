import * as React from "react";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {InputText} from "./CommonComponents/InputText";
import {ButtonComponent} from "./CommonComponents/ButtonComponent";
import Spinner from 'react-spinner-children';

export interface ILoginFormProps {

    loginAccessText: string,

    onChangeTextEmail: (event: object, newValue: string) => any;
    textEmail: string;
    valueToTextEmail?: string;

    onChangeTextPassword: (event: object, newValue: string) => any;
    textPassword: string;
    valueToTextPassword?: string;

    onButtonPressed: (value) => any;
    labelButton?: string;
    primary?: boolean
    valueButton? : string
    secondary?: boolean

    spinnerLoaded: boolean
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
                                    hintText={this.props.textEmail}
                                    valueToText={this.props.valueToTextEmail}
                                    floatingLabelText={this.props.textEmail}/>
                            </div>
                            <div className="login-register-div">
                                <InputText
                                    onChangeText={this.props.onChangeTextPassword}
                                    hintText={this.props.textPassword}
                                    valueToText={this.props.valueToTextPassword}
                                    floatingLabelText={this.props.textPassword}
                                    passwordField="password"/>
                            </div>

                            <div className="col-lg-12">
                                <div className="login-register-button-login">
                                    <Spinner loaded={this.props.spinnerLoaded}>
                                        <ButtonComponent
                                            onButtonPressed={this.props.onButtonPressed}
                                            label={this.props.labelButton}
                                            value={this.props.valueButton}
                                            primary={true}>
                                        </ButtonComponent>
                                    </Spinner>
                                </div>
                            </div>

                        </Paper>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
