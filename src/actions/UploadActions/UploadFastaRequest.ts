import {GeneHandlerDAO} from "../../access-data/dao/GeneHandler";

export function UploadFastaRequest(formData) {
    return function (dispatch) {
        return new GeneHandlerDAO().uploadFastaFileRequest(formData)
            .then((response) => {
                console.log(response)
            }).catch(error => {
                throw (error);
            })
    }
}