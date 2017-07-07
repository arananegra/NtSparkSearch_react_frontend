import {BuildTableOfResultGenesAction} from "./BuildTableOfResultGenesAction";
import {SubSequenceSearch} from "../../access-data/dao/SubSequenceSearch";

export function SearchDatabaseAction(sequenceToFetch) {
    return function (dispatch) {
        return new SubSequenceSearch().databaseSubSequence(sequenceToFetch)
            .then((jsonOfGenes) => {
                dispatch(BuildTableOfResultGenesAction(jsonOfGenes));
            }).catch(error => {
                throw (error);
            })
    }
}
