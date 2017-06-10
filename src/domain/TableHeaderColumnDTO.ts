export class TableHeaderColumnDTO {
    public _isKey: boolean;
    public _columnName: string;
    public _width: string;

    public constructor() {
        this._isKey = null;
        this._columnName = null;
        this._width = null;
    }
}