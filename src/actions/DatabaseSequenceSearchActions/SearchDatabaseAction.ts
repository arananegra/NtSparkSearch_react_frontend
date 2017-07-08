import {BuildTableOfResultGenesDatabaseAction} from "./BuildTableOfResultGenesDatabaseAction";
import {SubSequenceSearch} from "../../access-data/dao/SubSequenceSearch";
import {SpinnerDatabaseStateChangeAction} from "./SpinnerDatabaseStateChangeAction";

export function SearchDatabaseAction(sequenceToFetch) {
    return function (dispatch) {
        dispatch(SpinnerDatabaseStateChangeAction(false));
        return new SubSequenceSearch().databaseSubSequence(sequenceToFetch)
            .then((jsonOfGenes) => {
                dispatch(BuildTableOfResultGenesDatabaseAction(jsonOfGenes));
                dispatch(SpinnerDatabaseStateChangeAction(true));
            }).catch(error => {
                throw (error);
            })
    }
}
