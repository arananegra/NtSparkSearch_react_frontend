import {GeneHandlerDAO} from "../../access-data/dao/GeneHandlerDAO";

export function DownloadUnfilteredFastaAction() {
    return function () {
        return new GeneHandlerDAO().downloadUnfilteredFasta()
            .then(() => {

            }).catch(error => {
                throw (error);
            })
    }
}