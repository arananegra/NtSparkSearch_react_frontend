import {LoginRegisterBS} from "../../access-data/bs/LoginRegisterBS";
import {SpinnerLoginChangeAction} from "./SpinnerLoginChangeAction";
import {ShowSnackBarLoginFailedAction} from "./ShowSnackBarLoginFailedAction";
import {Constants} from "../../common/Constants";
import {ShowSnackBarLoginFailedConfirmAccountAction} from "./ShowSnackBarLoginFailedConfirmAccountAction";


export function LoginRequestAction(email, password) {

    let loginRegisterBS = new LoginRegisterBS();

    return function (dispatch) {
        return loginRegisterBS.loginUser(email, password)
            .then((dataFromResponse) => {
                loginRegisterBS.setJWTtokenFromSession(dataFromResponse.response.user.authentication_token);
                dispatch(SpinnerLoginChangeAction(true));
            }).catch(error => {
                dispatch(SpinnerLoginChangeAction(true));
                if (error.response.data.response.errors.email[0] === Constants.REQUIRE_ACCOUNT_ACTIVATION) {
                    dispatch(ShowSnackBarLoginFailedConfirmAccountAction(true));
                } else {
                    dispatch(ShowSnackBarLoginFailedAction(true));
                }
                if (loginRegisterBS.getJWTtokenFromSession() !== null) {
                    loginRegisterBS.removeJWTtokenFromSession();
                }
            })
    }
}