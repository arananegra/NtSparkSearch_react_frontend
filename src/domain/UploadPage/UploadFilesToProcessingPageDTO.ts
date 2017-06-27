export class UploadFilesToProcessingPageDTO {
    public _showModalDialogUploadExcel: boolean;
    public _emailFromDialog : string;

    public constructor() {
        this._showModalDialogUploadExcel = null;
        this._emailFromDialog = null;
    }
}