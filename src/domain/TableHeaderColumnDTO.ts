export class TableHeaderColumnDTO {
    public _isKey: boolean;
    public _columnName: string;
    public _value: string;
    public _width: string;

    public constructor() {
        this._isKey = null;
        this._columnName = null;
        this._value = null;
        this._width = null;
    }
}