import {GeneHandlerDAO} from "../../access-data/dao/GeneHandlerDAO";
import {RemoveUnfilteredSuccessAction} from "./RemoveUnfilteredSuccessAction";

export function RemoveUnfilteredAction() {
    return function (dispatch) {
        return new GeneHandlerDAO().removeUnfilteredCollection()
            .then((responseStatus) => {
                dispatch(RemoveUnfilteredSuccessAction(responseStatus));
            }).catch(error => {
                throw (error);
            })
    }
}