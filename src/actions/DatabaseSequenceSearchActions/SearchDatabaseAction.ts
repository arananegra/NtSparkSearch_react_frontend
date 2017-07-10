import {BuildTableOfResultGenesDatabaseAction} from "./BuildTableOfResultGenesDatabaseAction";
import {SubSequenceSearch} from "../../access-data/dao/SubSequenceSearch";
import {SpinnerDatabaseStateChangeAction} from "./SpinnerDatabaseStateChangeAction";
import {GeneHandlerDAO} from "../../access-data/dao/GeneHandlerDAO";
import {InitializeDatabaseSubSeqSearchPageAction} from "../InitializeActions/InitializeDatabaseSubSeqSearchPageAction";

export function SearchDatabaseAction(sequenceToFetch) {
    return function (dispatch) {
        dispatch(SpinnerDatabaseStateChangeAction(false));
        return new SubSequenceSearch().databaseSubSequence(sequenceToFetch)
            .then((response) => {
                if (response.status == 200) {
                    dispatch(BuildTableOfResultGenesDatabaseAction(response.data));
                    dispatch(SpinnerDatabaseStateChangeAction(true));
                }
            }).catch(error => {
                dispatch(InitializeDatabaseSubSeqSearchPageAction());
                dispatch(SpinnerDatabaseStateChangeAction(true));
            })
    }
}
