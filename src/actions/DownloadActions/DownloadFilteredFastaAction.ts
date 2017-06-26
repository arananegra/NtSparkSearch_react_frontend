import {GeneHandlerDAO} from "../../access-data/dao/GeneHandlerDAO";

export function DownloadFilteredFastaAction() {
    return function () {
        return new GeneHandlerDAO().downloadFilteredFasta()
            .then(() => {
            }).catch(error => {
                throw (error);
            })
    }
}