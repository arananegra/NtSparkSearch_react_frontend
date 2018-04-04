export class SettingsPageDTO {
    public _showModalDialogRemoveUnfiltered: boolean;
    public _showModalDialogRemoveFiltered: boolean;
    public _showSnackbarRemoveUnfiltered: boolean;
    public _showSnackbarRemoveFiltered: boolean;

    public constructor() {
        this._showModalDialogRemoveUnfiltered = null;
        this._showModalDialogRemoveFiltered = null;
        this._showSnackbarRemoveUnfiltered = null;
        this._showSnackbarRemoveFiltered = null;
    }
}