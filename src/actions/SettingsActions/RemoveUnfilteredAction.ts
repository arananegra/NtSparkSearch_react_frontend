import {GeneHandlerDAO} from "../../access-data/dao/GeneHandlerDAO";
import {RemoveUnfilteredSuccessAction} from "./RemoveUnfilteredSuccessAction";

export function RemoveUnfilteredAction() {
    return function (dispatch) {
        return new GeneHandlerDAO().removeUnfilteredCollection()
            .then(() => {
                dispatch(RemoveUnfilteredSuccessAction());
            }).catch(error => {
                throw (error);
            })
    }
}