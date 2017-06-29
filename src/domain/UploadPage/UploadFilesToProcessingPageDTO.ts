export class UploadFilesToProcessingPageDTO {
    public _showModalDialogUploadExcel: boolean;
    public _emailFromDialog: string;
    public _showSnackBarUploadExcelSucces: boolean;
    public _showSnackBarUploadFastaSucces: boolean;

    public constructor() {
        this._showModalDialogUploadExcel = null;
        this._emailFromDialog = null;
        this._showSnackBarUploadExcelSucces = null;
        this._showSnackBarUploadFastaSucces = null;
    }
}