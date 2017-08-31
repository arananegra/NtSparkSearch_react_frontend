import {connect} from "react-redux";
import {IReducers} from "../../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {
    ILoginRegisterPageDispatchProps,
    ILoginRegisterPageProps,
    LoginRegisterPage
} from "./LoginRegisterPage";
import {WriteEmailLoginAction} from "../../actions/LoginActions/WriteEmailLoginAction";
import {WritePasswordLoginAction} from "../../actions/LoginActions/WritePasswordLoginAction";
import {LoginRequestAction} from "../../actions/LoginActions/LoginRequestAction";
import {RegisterRequestAction} from "../../actions/LoginActions/RegisterRequestAction";

const mapStateToProp = (state: IReducers): ILoginRegisterPageProps => ({
    loginPage: state['reducers'].LoginRegisterPageReducer._loginPage
});

const mapDispatchToProps = (dispatch): ILoginRegisterPageDispatchProps => ({
    onMailChange: (email) => dispatch(WriteEmailLoginAction(email)),
    onPasswordChage: (password) => dispatch(WritePasswordLoginAction(password)),
    onLoginClicked: (email, password) => dispatch(LoginRequestAction(email, password)),
    onRegisterClicked: (email, password) => dispatch(RegisterRequestAction(email, password)),
});

export const LoginRegisterPageContainer = connect<ILoginRegisterPageProps, ILoginRegisterPageDispatchProps, {}>(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(LoginRegisterPage));
