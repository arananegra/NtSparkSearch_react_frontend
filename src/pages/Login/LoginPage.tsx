import * as React from "react";
import {FormattedMessage} from "react-intl";
import {LoginRegisterForm} from "../../components/LoginRegisterForm";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {MessagesConstants} from "../../i18n/MessagesConstants";
import {LoginPageDTO} from "../../domain/LoginPage/LoginPageDTO";


export interface ILoginPageProps {
    intl?: any
    loginPage: LoginPageDTO;
}

export interface ILoginPageDispatchProps {
    onMailChange: (email) => any;
    onPasswordChage: (password) => any;
    onLoginClicked: (email, password) => any;
}

export interface ILoginPagePageState {

}

let divStyle = {
    minHeight: "100%",
    minWidth: "100%",

    /* Set up proportionate scaling */
    width: "100%",
    height: "100%",

    /* Set up positioning */
    position: "fixed" as "fixed",
    top: "0",
    left: "0",
    backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Cadena_de_ADN.jpg)"
};


export class LoginPage extends React.Component<ILoginPageProps & ILoginPageDispatchProps & InjectedIntlProps, ILoginPagePageState> {
    public constructor(props: ILoginPageProps & ILoginPageDispatchProps & InjectedIntlProps) {
        super(props);
    }

    private onEmail(event: object, newValue: string) {
        this.props.onMailChange(newValue);
    }

    private onPassword(event: object, newValue: string) {
        this.props.onPasswordChage(newValue);
    }

    private onLoginClick(event) {
        this.props.onLoginClicked(this.props.loginPage._email, this.props.loginPage._password);
    }


    public render() {
        return (
            <div style={divStyle}>
                <LoginRegisterForm
                    loginAccessText={this.props.intl.formatMessage({id: MessagesConstants.LOGIN_ACCESS_TITTLE})}
                    floatingLabelTextEmail={this.props.intl.formatMessage({id: MessagesConstants.LOGIN_EMAIL})}
                    floatingLabelTextPassword={this.props.intl.formatMessage({id: MessagesConstants.LOGIN_PASSWORD})}
                    onButtonPressed={this.onLoginClick.bind(this)}
                    onChangeTextEmail={this.onEmail.bind(this)}
                    onChangeTextPassword={this.onPassword.bind(this)}
                    >
                </LoginRegisterForm>
            </div>
        );
    }
}