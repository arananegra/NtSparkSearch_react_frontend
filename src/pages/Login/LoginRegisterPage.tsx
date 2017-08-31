import * as React from "react";
import {FormattedMessage} from "react-intl";
import {LoginRegisterForm} from "../../components/LoginRegisterForm";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {MessagesConstants} from "../../i18n/MessagesConstants";
import {LoginRegisterPageDTO} from "../../domain/LoginPage/LoginPageDTO";
import {store} from "../../components/AppPipeline";
import {SpinnerLoginChangeAction} from "../../actions/LoginActions/SpinnerLoginChangeAction";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import {ShowSnackBarLoginFailedAction} from "../../actions/LoginActions/ShowSnackBarLoginFailedAction";
import {SpinnerRegisterChangeAction} from "../../actions/LoginActions/SpinnerRegisterChangeAction";
import {ShowSnackBarRegisterFailedAction} from "../../actions/LoginActions/ShowSnackBarRegisterFailedAction";
import {ShowSnackBarLoginFailedConfirmAccountAction} from "../../actions/LoginActions/ShowSnackBarLoginFailedConfirmAccountAction";


export interface ILoginRegisterPageProps {
    intl?: any
    loginPage: LoginRegisterPageDTO;
}

export interface ILoginRegisterPageDispatchProps {
    onMailChange: (email) => any;
    onPasswordChage: (password) => any;
    onLoginClicked: (email, password) => any;
    onRegisterClicked?: (email, password) => any;
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


export class LoginRegisterPage extends React.Component<ILoginRegisterPageProps & ILoginRegisterPageDispatchProps & InjectedIntlProps, ILoginPagePageState> {
    public constructor(props: ILoginRegisterPageProps & ILoginRegisterPageDispatchProps & InjectedIntlProps) {
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
        store.dispatch(SpinnerLoginChangeAction(false));
    }

    private onRegisterClick(event) {
        this.props.onRegisterClicked(this.props.loginPage._email, this.props.loginPage._password);
        store.dispatch(SpinnerRegisterChangeAction(false));
    }

    private manageSnackBarLoginFailed() {
        store.dispatch(ShowSnackBarLoginFailedAction(false));
    }

    private manageSnackBarRegisterFailed() {
        store.dispatch(ShowSnackBarRegisterFailedAction(false));
    }

    private manageSnackBarLoginFailedConfirmAccount() {
        store.dispatch(ShowSnackBarLoginFailedConfirmAccountAction(false));
    }

    public render() {
        return (
            <div style={divStyle}>
                <LoginRegisterForm
                    loginAccessText={this.props.intl.formatMessage({id: MessagesConstants.LOGIN_ACCESS_TITTLE})}
                    textEmail={this.props.intl.formatMessage({id: MessagesConstants.LOGIN_EMAIL})}
                    textPassword={this.props.intl.formatMessage({id: MessagesConstants.LOGIN_PASSWORD})}
                    valueToTextEmail={this.props.loginPage._email}
                    valueToTextPassword={this.props.loginPage._password}
                    onButtonPressedLogin={this.onLoginClick.bind(this)}
                    onChangeTextEmail={this.onEmail.bind(this)}
                    onChangeTextPassword={this.onPassword.bind(this)}
                    spinnerLoadedLogin={this.props.loginPage._spinnerLoadedLogin}
                    spinnerLoadedRegister={this.props.loginPage._spinnerLoadedRegister}
                    labelButtonLogin={this.props.intl.formatMessage({id: MessagesConstants.LOGIN_BUTTON})}
                    valueButtonLogin={this.props.intl.formatMessage({id: MessagesConstants.LOGIN_BUTTON})}
                    labelButtonRegister={this.props.intl.formatMessage({id: MessagesConstants.REGISTER_BUTTON})}
                    valueButtonRegister={this.props.intl.formatMessage({id: MessagesConstants.REGISTER_BUTTON})}
                    onButtonPressedRegister={this.onRegisterClick.bind(this)}
                >
                </LoginRegisterForm>

                <MuiThemeProvider>
                    <div>
                        <Snackbar
                            open={this.props.loginPage._showSnackBarLoginFailed}
                            message={this.props.intl.formatMessage({id: MessagesConstants.SNACKBAR_LOGIN_FAILED})}
                            autoHideDuration={4000}
                            onRequestClose={this.manageSnackBarLoginFailed.bind(this)}
                        />
                        <Snackbar
                            open={this.props.loginPage._showSnackBarRegisterFailed}
                            message="Ya existe una cuenta vinculada con ese email"
                            autoHideDuration={5000}
                            onRequestClose={this.manageSnackBarRegisterFailed.bind(this)}
                        />

                        <Snackbar
                            open={this.props.loginPage._showSnackBarLoginRequiredConfirmation}
                            message="Confirmación email necesaria"
                            autoHideDuration={5000}
                            onRequestClose={this.manageSnackBarLoginFailedConfirmAccount.bind(this)}
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}