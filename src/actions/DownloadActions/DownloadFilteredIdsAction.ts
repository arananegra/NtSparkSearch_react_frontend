import {GeneHandlerDAO} from "../../access-data/dao/GeneHandlerDAO";

export function DownloadFilteredIdsAction() {
    return function () {
        return new GeneHandlerDAO().downloadFilteredIds()
            .then(() => {
            }).catch(error => {
                throw (error);
            })
    }
}