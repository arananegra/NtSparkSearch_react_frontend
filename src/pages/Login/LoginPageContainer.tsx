import {connect} from "react-redux";
import {IReducers} from "../../reducers/IndexReducers";
import {injectIntl} from "react-intl";
import {ILoginPagePageState, ILoginPageProps, LoginPage} from "./LoginPage";

const mapStateToProp = (state: IReducers): ILoginPageProps => ({});

const mapDispatchToProps = (dispatch): ILoginPagePageState => ({

});

export const LoginPageContainer = connect<ILoginPageProps, ILoginPagePageState, {}>(
    mapStateToProp,
    mapDispatchToProps
)(injectIntl(LoginPage));
