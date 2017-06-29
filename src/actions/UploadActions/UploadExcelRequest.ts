import {GeneHandlerDAO} from "../../access-data/dao/GeneHandlerDAO";

export function UploadExcelRequest(formData) {
    return function () {
        return new GeneHandlerDAO().uploadExcelFileRequest(formData)
            .then(() => {
            }).catch(error => {
                throw (error);
            })
    }
}