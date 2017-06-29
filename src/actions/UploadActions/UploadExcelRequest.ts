import {GeneHandlerDAO} from "../../access-data/dao/GeneHandlerDAO";

export function UploadExcelRequest(formData) {
    return function (dispatch) {
        return new GeneHandlerDAO().uploadExcelFileRequest(formData)
            .then((response) => {
                console.log(response)
            }).catch(error => {
                throw (error);
            })
    }
}