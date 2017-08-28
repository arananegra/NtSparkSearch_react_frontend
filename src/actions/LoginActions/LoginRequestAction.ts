import {LoginBS} from "../../access-data/bs/LoginBS";
import {LoginSuccessAction} from "./LoginSuccessAction";
import {LoginFailedAction} from "./LoginFailedAction";
export function LoginRequestAction(email, password) {
    return function (dispatch) {
        return new LoginBS().loginUser(email, password)
            .then((response) => {
                sessionStorage.setItem("token",response);
                dispatch(LoginSuccessAction());
            }).catch(error => {
                dispatch(LoginFailedAction());
            })
    }
}