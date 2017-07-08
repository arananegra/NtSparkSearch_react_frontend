import {SpinnerDirectStateChangeAction} from "./SpinnerDirectStateChangeAction";
import {SubSequenceSearch} from "../../access-data/dao/SubSequenceSearch";
import {BuildTableOfResultGenesDirectAction} from "./BuildTableOfResultGenesDirectAction";
import {ShowModalDialogSearchRequestAction} from "./ShowModalDialogSearchRequestAction";

export function SearchDirectAction(sequenceToFetch, genesToFetch) {
    return function (dispatch) {
        dispatch(SpinnerDirectStateChangeAction(false));
        return new SubSequenceSearch().genesChecker(sequenceToFetch, genesToFetch)
            .then((response) => {
                if (response.status === 202){
                    dispatch(ShowModalDialogSearchRequestAction(true));
                }
                else if(response.status === 200){
                    dispatch(BuildTableOfResultGenesDirectAction(response.data));
                }
                dispatch(SpinnerDirectStateChangeAction(true));
            }).catch(error => {
                throw (error);
            })
    }
}
