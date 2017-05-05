import {GeneSubSequenceSearcherDTO} from "./GeneSubSequenceSearcherDTO";
import {GeneSubsequenceResultDTO} from "./GeneSubsequenceResultDTO";
import {TableHeaderColumnDTO} from "./TableHeaderColumnDTO";

export class GeneSearchPageDTO {
    public _geneSubSequenceSearcher: GeneSubSequenceSearcherDTO;
    public _geneSubSequenceResultFound: Array<GeneSubsequenceResultDTO>;
    public _geneTableResultHeaderColumns: Array<TableHeaderColumnDTO>;

    public constructor() {
        this._geneSubSequenceResultFound = null;
        this._geneSubSequenceSearcher = null;
        this._geneTableResultHeaderColumns = null;
    }
}