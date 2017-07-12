import {GeneHandlerDAO} from "../../access-data/dao/GeneHandler";
import {ShowSnackBarRemoveFilteredAction} from "./ShowSnackBarRemoveFilteredAction";

export function RemoveFilteredAction() {
    return function (dispatch) {
        return new GeneHandlerDAO().removeFilteredCollection()
            .then((showSnackBarUnfiltered) => {
                dispatch(ShowSnackBarRemoveFilteredAction(showSnackBarUnfiltered));
            }).catch(error => {
                throw (error);
            })
    }
}