import {SubSequenceSearch} from "../../access-data/dao/SubSequenceSearch";

export function DownloadGenesDirectSearchAction(listOfGenesToDownload, email) {
    return function (dispatch) {
        return new SubSequenceSearch().downloadGenesFromListToUnfiltered(listOfGenesToDownload, email)
            .then((response) => {
            }).catch(error => {
                throw (error);
            })
    }
}