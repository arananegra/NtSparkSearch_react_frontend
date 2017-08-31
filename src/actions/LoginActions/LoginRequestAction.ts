import {LoginBS} from "../../access-data/bs/LoginBS";
import {LoginSuccessAction} from "./LoginSuccessAction";
import {LoginFailedAction} from "./LoginFailedAction";
import {browserHistory} from "react-router";
import {RoutesConstants} from "../../common/RoutesConstants";
import {SpinnerLoginChangeAction} from "./SpinnerLoginChangeAction";
import {ShowSnackBarLoginFailedAction} from "./ShowSnackBarLoginFailedAction";


export function LoginRequestAction(email, password) {

    let loginBS = new LoginBS();

    return function (dispatch) {
        return loginBS.loginUser(email, password)
            .then((token) => {
                loginBS.setJWTtokenFromSession(token);
                dispatch(LoginSuccessAction());
                dispatch(SpinnerLoginChangeAction(true));
            }).catch(error => {
                dispatch(LoginFailedAction());
                dispatch(SpinnerLoginChangeAction(true));
                dispatch(ShowSnackBarLoginFailedAction(true));
                if (loginBS.getJWTtokenFromSession() != null) {
                    loginBS.removeJWTtokenFromSession();
                }
            })
    }
}