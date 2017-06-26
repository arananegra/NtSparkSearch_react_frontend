import {GeneHandlerDAO} from "../../access-data/dao/GeneHandlerDAO";

export function DownloadUnfilteredIdsAction() {
    return function () {
        return new GeneHandlerDAO().downloadUnfilteredIds()
            .then(() => {
            }).catch(error => {
                throw (error);
            })
    }
}