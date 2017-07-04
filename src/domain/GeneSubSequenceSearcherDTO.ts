import {GeneDTO} from "./GeneDTO";
export class GeneSubSequenceSearcherDTO {
    public _geneListText: string;
    public _dnaSequenceToFind: string;
    public _geneListArray: Array<GeneDTO>;

    public constructor() {
        this._geneListText = null;
        this._dnaSequenceToFind = null;
        this._geneListArray = null;
    }
}