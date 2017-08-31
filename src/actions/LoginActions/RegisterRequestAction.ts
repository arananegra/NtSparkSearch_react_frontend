import {LoginRegisterBS} from "../../access-data/bs/LoginRegisterBS";
import {SpinnerLoginChangeAction} from "./SpinnerLoginChangeAction";
import {ShowSnackBarLoginFailedAction} from "./ShowSnackBarLoginFailedAction";
import {SpinnerRegisterChangeAction} from "./SpinnerRegisterChangeAction";
import {ShowSnackBarRegisterFailedAction} from "./ShowSnackBarRegisterFailedAction";


export function RegisterRequestAction(email, password) {

    let loginRegisterBS = new LoginRegisterBS();

    return function (dispatch) {
        return loginRegisterBS.registerUser(email, password)
            .then((dataFromResponse) => {
                dispatch(SpinnerRegisterChangeAction(true));
            }).catch(error => {
                dispatch(SpinnerRegisterChangeAction(true));
                dispatch(ShowSnackBarRegisterFailedAction(true));
            })
    }
}