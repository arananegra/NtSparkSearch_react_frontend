import {LoginBS} from "../../access-data/bs/LoginBS";
import {LoginSuccessAction} from "./LoginSuccessAction";
import {LoginFailedAction} from "./LoginFailedAction";
import {browserHistory} from 'react-router';
import {RoutesConstants} from "../../common/RoutesConstants";
import {SpinnerLoginChangeAction} from "./SpinnerLoginChangeAction";

export function LoginRequestAction(email, password) {
    return function (dispatch) {
        return new LoginBS().loginUser(email, password)
            .then((response) => {
                sessionStorage.setItem("token",response);
                dispatch(LoginSuccessAction());
                dispatch(SpinnerLoginChangeAction(false));
                browserHistory.push(RoutesConstants.SUB_SEQUENCE_SEARCH_ROUTE_PATH);
            }).catch(error => {
                dispatch(LoginFailedAction());
                dispatch(SpinnerLoginChangeAction(true));
                if (sessionStorage.getItem("token") != null) {
                    sessionStorage.removeItem("token");
                }
            })
    }
}