import {GeneHandlerDAO} from "../../access-data/dao/GeneHandler";
import {ShowSnackBarRemoveUnfilteredAction} from "./ShowSnackBarRemoveUnfilteredAction";

export function RemoveUnfilteredAction() {
    return function (dispatch) {
        return new GeneHandlerDAO().removeUnfilteredCollection()
            .then((showSnackBarUnfiltered) => {
                dispatch(ShowSnackBarRemoveUnfilteredAction(showSnackBarUnfiltered));
            }).catch(error => {
                throw (error);
            })
    }
}