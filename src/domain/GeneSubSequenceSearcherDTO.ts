import {GeneDTO} from "./GeneDTO";

export class GeneSubSequenceSearcherDTO {
    public _geneList: Array<GeneDTO>;
    public _dnaSequenceToFind: string;

    public constructor() {
        this._geneList = null;
        this._dnaSequenceToFind = null;
    }
}