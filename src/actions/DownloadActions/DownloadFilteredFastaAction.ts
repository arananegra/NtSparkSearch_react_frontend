import {GeneHandlerDAO} from "../../access-data/dao/GeneHandler";

export function DownloadFilteredFastaAction() {
    return function () {
        return new GeneHandlerDAO().downloadFilteredFasta()
            .then(() => {
            }).catch(error => {
                throw (error);
            })
    }
}