export class UploadFilesToProcessingPageDTO {
    public _showModalDialogUploadExcel: boolean;
    public _emailFromDialog : string;
    public _showToastUploadExcelSucces : boolean;
    public _showToastUploadExcelFail : boolean;
    public _showToastUploadFastaSucces : boolean;
    public _showToastUploadFastaFail : boolean;


    public constructor() {
        this._showModalDialogUploadExcel = null;
        this._emailFromDialog = null;
        this._showToastUploadExcelSucces = null;
        this._showToastUploadExcelFail = null;
        this._showToastUploadFastaSucces = null;
        this._showToastUploadFastaFail = null;
    }
}