import {BuildTableOfResultGenesAction} from "./BuildTableOfResultGenesAction";
import {SubSequenceSearch} from "../../access-data/dao/SubSequenceSearch";
import {SpinnerStateChangeAction} from "./SpinnerStateChangeAction";

export function SearchDatabaseAction(sequenceToFetch) {
    return function (dispatch) {
        dispatch(SpinnerStateChangeAction(false));
        return new SubSequenceSearch().databaseSubSequence(sequenceToFetch)
            .then((jsonOfGenes) => {
                dispatch(BuildTableOfResultGenesAction(jsonOfGenes));
                dispatch(SpinnerStateChangeAction(true));
            }).catch(error => {
                throw (error);
            })
    }
}
