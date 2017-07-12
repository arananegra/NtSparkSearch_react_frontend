import {GeneHandlerDAO} from "../../access-data/dao/GeneHandler";

export function UploadExcelRequest(formData, email) {
    return function (dispatch) {
        return new GeneHandlerDAO().uploadExcelFileRequest(formData, email)
            .then((response) => {
                console.log(response)
            }).catch(error => {
                throw (error);
            })
    }
}