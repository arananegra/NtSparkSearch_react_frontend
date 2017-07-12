import {GeneHandlerDAO} from "../../access-data/dao/GeneHandler";

export function DownloadUnfilteredIdsAction() {
    return function () {
        return new GeneHandlerDAO().downloadUnfilteredIds()
            .then(() => {
            }).catch(error => {
                throw (error);
            })
    }
}