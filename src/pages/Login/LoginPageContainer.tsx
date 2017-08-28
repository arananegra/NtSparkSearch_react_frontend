import {connect} from "react-redux";
import {IReducers} from "../../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {ILoginPageDispatchProps, ILoginPagePageState, ILoginPageProps, LoginPage} from "./LoginPage";
import {WriteEmailLoginAction} from "../../actions/LoginActions/WriteEmailLoginAction";
import {WritePasswordLoginAction} from "../../actions/LoginActions/WritePasswordLoginAction";

const mapStateToProp = (state: IReducers): ILoginPageProps => ({
    loginPage: state['reducers'].LoginPageReducer._loginPage
});

const mapDispatchToProps = (dispatch): ILoginPageDispatchProps => ({
    onMailChange: (email) => dispatch(WriteEmailLoginAction(email)),
    onPasswordChage: (password) => dispatch(WritePasswordLoginAction(password)),
    onLoginClicked: (email, password) => null,
});

export const LoginPageContainer = connect<ILoginPageProps, ILoginPageDispatchProps, {}>(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(LoginPage));
